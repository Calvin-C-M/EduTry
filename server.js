const clientPromise = require("./utils/dbConnection.js");
const loginBlocker = require("./utils/loginBlocker.js");
require('dotenv').config({ path:'./.env.local' })

const express = require("express");
const session = require("express-session");
const flash = require("connect-flash");
const bodyParser = require("body-parser");
const { ObjectId } = require("mongodb");
const next = require("next");

const port = process.env.PORT
const hostname = process.env.HOSTNAME
const baseUrl = `https://${hostname}`

const dev = process.env.ENVIRONMENT !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
    const server = express()
    server.use(session({
        secret: "edutry",
        resave: true,
        saveUninitialized: true
    }))
    server.use(bodyParser.urlencoded({ extended: true }))
    server.use(flash())

    // Apabila dalam sebuah route dibutuhkan SSR
    // Konfigurasi dibawah ini
    // =========================================

    server.get('/', (req, res) => {
        return app.render(req, res, '/index', req.query)
    })

    server.get('/autentikasi', (req, res) => {
        return app.render(req, res, '/autentikasi', req.query)
    })

    server.get('/profile', (req, res) => {
        loginBlocker(req, res)
        console.log("Profile")
        return app.render(req, res, '/profile', req.query)
    })

    server.get('/test', (req,res) => {
        console.log("Test")
        return app.render(req, res, '/test', req.query)
    })

    server.get('/dashboard', (req, res) => {
        loginBlocker(req, res)
        return app.render(req, res, '/dashboard', req.query)
    })

    server.get('/intro-tryout/:id', (req, res) => {
        loginBlocker(req, res)
        const id = req.params.id

        fetch(`${baseUrl}/api/mytryout/${id}`)
            .then(res => res.json())
            .then(data => {
                req.session.mytryout = data
                fetch(`${baseUrl}/api/tryout/${data.id_tryout}`)
                    .then(res => res.json())
                    .then(data => {
                        req.session.tryout = data
                        return app.render(req, res, '/intro-tryout', req.query)
                    })
                    .catch(err => {
                        console.log(err)
                        req.flash("error_message", "Ada kesalahan dalam fetch API")
                        res.redirect('/my-tryouts')                                
                    })
            })
            .catch(err => {
                console.log(err)
                req.flash("error_message", "Ada kesalahan dalam fetch API")
                res.redirect('/my-tryouts')
            })
    })

    server.get('/tryouts', (req, res) => {
        loginBlocker(req, res)
        return app.render(req, res, '/tryouts', req.query)
    })

    server.get('/my-tryouts', (req, res) => {
        loginBlocker(req, res)
        return app.render(req, res, '/my-tryouts', req.query)
    })
    
    server.get('/discuss/:id', (req, res) => {
        loginBlocker(req, res)

        // if(req.session.tryout == null) {
        //     req.flash("message", "Buka tryoutnya terlebih dahulu")
        //     res.redirect("/my-tryouts")
        // }

        const id = req.params.id

        fetch(`${baseUrl}/api/discussion/${id}`)
            .then(res => res.json())
            .then(data => {
                req.session.discuss = data
                return app.render(req, res, '/discuss', req.query)
            })
            .catch(err => {
                console.log(err)
            })
    })

    server.get('/questions/:id', (req, res) => {
        if(req.session.tryout == null) {
            req.flash("message", "Buka tryoutnya terlebih dahulu")
            res.redirect("/my-tryouts")
        }

        req.session.soal = []

        let index = 0

        for(let soal of req.session.tryout.subtryout[0].soal) {
            const tempSoal = {
                "id": index++,
                "isi": soal.isi,
                "bobot": soal.bobot,
                "jawaban_asli": soal.jawaban,
                "pembahasan": soal.pembahasan,
                "jawaban": "",
                "pilihan": []
            }

            let indexPilihan = 0
            for(let pilihan of soal.pilihan) {
                const tempPilihan = {
                    "index": String.fromCharCode(65+(indexPilihan++)),
                    "isi": pilihan,
                }
                tempSoal.pilihan = [...tempSoal.pilihan, tempPilihan]
            }

            req.session.soal = [...req.session.soal, tempSoal]
        }

        return app.render(req, res, '/questions', req.query)
    })

    server.get('/answer/:id', (req, res) => {
        const id = new ObjectId(req.params.id)

        if(req.session.mytryout == null || req.session.mytryout == undefined) {
            req.flash("message", "Buka tryoutnya terlebih dahulu")
            res.redirect('/my-tryouts')
        }

        req.session.hasil = req.session.mytryout.hasil.find(obj => obj.id_subtryout == id)

        return app.render(req, res, '/answer', req.query)
    })
  
    server.get('/result/:id', (req, res) => {
        if(req.session.mytryout == null || req.session.mytryout == undefined) {
            req.flash("message", "Buka tryoutnya terlebih dahulu")
            res.redirect('/my-tryouts')
        }

        req.session.statistik = []
        let i = 0

        for(let hasil of req.session.mytryout.hasil) {
            const subtryout = req.session.tryout.subtryout.find(obj => hasil.id_subtryout == obj._id)
            const dataStatistik = {
                "id": i++,
                "nama": subtryout.nama,
                "jenis": subtryout.jenis,
                "stat": {
                    "benar": 0,
                    "salah": 0,
                    "kosong": 0,
                    "score": 0
                }
            }

            for(let kerjaan of hasil.kerjaan) {
                dataStatistik.stat.benar += (kerjaan.skor > 0) ? 1 : 0
                dataStatistik.stat.salah += (kerjaan.skor == 0) ? 1 : 0
                dataStatistik.stat.kosong += (kerjaan.skor < 0) ? 1 : 0
                dataStatistik.stat.score += (kerjaan.skor >= 0) ? kerjaan.skor : 0
            }

            req.session.statistik = [...req.session.statistik, dataStatistik]
        }

        return app.render(req, res, '/result', req.query)
    })

    server.get('/purchase/:id', (req, res) => {
        const id = req.params.id
        fetch(`${baseUrl}/api/tryout/${id}`)
            .then(res => res.json())
            .then(data => {
                req.session.tryout = data
                return app.render(req, res, '/purchase', req.query)
            })
            .catch(err => {
                console.log(err)
                req.flash("message", "Ada kesalahan dalam melakukan fetch")
                res.redirect('/tryouts')
            })
    })

    server.get('/payment/:id', async (req, res) => {
        loginBlocker(req, res)

        const id = req.params.id

        fetch(`${baseUrl}/api/mytryout/${id}`)
            .then(res => res.json())
            .then(data => {
                req.session.transaksi = data

                fetch(`${baseUrl}/api/tryout/${data.id_tryout}`)
                    .then(res => res.json())
                    .then(data => {
                        req.session.tryout = data
                        return app.render(req, res, '/payment', req.query)
                    })
            })
            .catch(err => {
                console.log(err)
                req.flash('message', "Ada kesalahan dalam fetch API")
                res.redirect('/tryouts')
            })

    })
  
    server.get('/upload-payment-proof', (req, res) => {
        req.session.API_KEY = process.env.IMBB_API_KEY
        return app.render(req, res, '/upload-payment-proof', req.query)
    })

    server.get('/admin/tryout', (req, res) => {
        loginBlocker(req, res)
        req.session.tryout = {}
        return app.render(req, res, '/admin/tryout', req.query)
    })

    server.get('/admin/subtryout/:id', async (req, res) => {
        loginBlocker(req, res)

        const id = req.params.id
        console.log(id)

        fetch(`${baseUrl}/api/tryout/${id}`)
            .then(res => res.json())
            .then(data => {
                req.session.tryout = data
                return app.render(req, res, '/admin/subtryout', req.query)
            })
            .catch(err => console.log(err))
    })

    server.get('/admin/soal/:id', async (req, res) => {
        loginBlocker(req, res)

        const id = req.params.id
        // console.log(req.session.tryout)
        // req.session.tryout.subtryout = req.session.tryout.subtryout.filter(data => {
        //     if(data._id == id) {
        //         return data
        //     }
        // })
        return app.render(req, res, '/admin/soal', req.query)
    })

    server.get('/admin/pembayaran', (req, res) => {
        loginBlocker(req, res)
        return app.render(req, res, '/admin/pembayaran', req.query)
    })
    
    // Contollers
    server.post('/control/login', async (req, res) => {
        const inputData = req.body

        const client = await clientPromise
        const database = client.db(process.env.MONGODB_NAME)
        const accountData = await database.collection("account").find({ username: inputData.username }).toArray()

        if(accountData.length < 1 || inputData.password != accountData[0].password) {
            req.flash('message', 'Invalid Login!')
            res.redirect('/autentikasi')
        } else {
            req.session.isLoggedIn = true
            switch(accountData[0].role) {
                case "USER":
                    const userData = await database.collection("user").find({ id_account: accountData[0]._id.toString() }).toArray()
                    req.session.user = {
                        "_id": userData[0]._id,
                        "nama": userData[0].nama,
                        "email": userData[0].email,
                        "kontak": userData[0].kontak,
                        "tryouts": userData[0].tryouts,
                        "pilihan": userData[0].pilihan,
                    }
                    res.redirect('/dashboard')
                    break;

                case "ADMIN":
                    const adminData = await database.collection("admin").find({ id_account: accountData[0]._id.toString() }).toArray()
                    req.session.admin = {
                        nama: adminData[0].nama,
                        is_prime: adminData[0].is_prime,
                    }
                    res.redirect('/admin/tryout')
                    break;
            }
        }
    })

    server.post('/control/register', async (req, res) => {
        /**
         * req.body = {
         *      username: String,
         *      email: String,
         *      password: String
         * }
         */
        const inputData = req.body

        const client = await clientPromise
        const database = client.db(process.env.MONGODB_NAME)
        const accountData = await database.collection("account").find({ username: inputData.username }).toArray()
        const userData = await database.collection("user").find({ email: inputData.email }).toArray()

        if(accountData.length > 0) {
            req.flash('message', 'Username is taken!')
            res.redirect('/autentikasi#register')
        } else if(userData.length > 0) {
            req.flash('message', 'Email is already registered!')
            res.redirect('/autentikasi#register')
        } else {
            await database.collection('account').insertOne({
                username: inputData.username,
                password: inputData.password,
                role: "USER"
            })

            const account = await database.collection('account').find({ username: inputData.username }).toArray()

            await database.collection('user').insertOne({
                nama: inputData.username,
                email: inputData.email,
                kontak: "",
                tryouts: [],
                pilihan: [],
                id_account: account[0]._id.toString()
            })
            
            req.flash('message', 'Pendaftaran berhasil!')
            res.redirect('/autentikasi')
        }
    })

    server.post('/control/submit', async (req, res) => {
        /**
         * [{"id":0,"isi":"Siapakah presiden ke-7 Indonesia","jawaban":"D","pilihan":[{"index":"A","isi":"Soekarno"},{"index":"B","isi":"Megawati"},{"index":"C","isi":"Jokowi"},{"index":"D","isi":"Soeharto"},{"index":"E","isi":"Puan"}]},{"id":1,"isi":"1+1","jawaban":"","pilihan":[{"index":"A","isi":"3"},{"index":"B","isi":"2"},{"index":"C","isi":"1"},{"index":"D","isi":"0"},{"index":"E","isi":null}]}]
         */
        /**
         * req.body = [{
         *  "id": int
         *  "isi": string
         *  "jawaban": string (index),
         *  "pilihan": [{
         *      "index": string,
         *      "isi": string
         *  }]
         * }]
         */

        const hasil = {
            "id_subtryout": req.body.id_subtryout,
            "kerjaan": []
        }

        for(let soal of JSON.parse(req.body.selection)) {
            const terpilih = soal.pilihan.find(pil => pil.index == soal.jawaban)
            
            const tempSoal = {
                "id": soal.id,
                "isi": soal.isi,
                "terpilih": terpilih,
                "jawaban_asli": soal.jawaban_asli,
                "pembahasan": soal.pembahasan,
                "pilihan": soal.pilihan,
                "skor": (soal.jawaban_asli == terpilih.isi) ? parseFloat(soal.bobot) : 0,
            }

            hasil.kerjaan = [...hasil.kerjaan, tempSoal]
        }

        const id = new ObjectId(req.session.mytryout._id)

        const client = await clientPromise
        const database = client.db(process.env.MONGODB_NAME)

        try {
            await database.collection("mytryout").updateOne(
                { "_id": id },
                {
                    $push: {
                        "hasil": hasil
                    }
                } 
            )
            res.redirect(`/intro-tryout/${id}`)
        } catch(err) {
            console.log(err)
        }
    })

    server.post('/control/payment', async (req, res) => {
        const client = await clientPromise
        const database = client.db(process.env.MONGODB_NAME)

        const transaksiId = new ObjectId()

        try {
            await database.collection('mytryout').insertOne({
                "_id": transaksiId,
                "id_tryout": req.session.tryout._id,
                "status": "PENDING",
                "bukti_bayar": "",
                "harga": req.session.tryout.harga,
                "method": req.body.method,
                "hasil": []
            })

            try {
                const userId = new ObjectId(req.session.user._id)
            
                await database.collection('user').updateOne(
                    { "_id": userId },
                    {
                        $push: {
                            "tryouts": transaksiId.toHexString()
                        }
                    }
                )

                res.redirect(`/payment/${transaksiId}`)
            } catch(err) {
                console.log(err)
            }
        } catch(err) {
            console.log(err)
        }
    })

    server.post('/control/confirm-payment', async (req, res) => {
        console.log(req.body)
        const confirmationImageLink = req.body.confirm_image

        const client = await clientPromise
        const database = client.db(process.env.MONGODB_NAME)

        const transaksiId = new ObjectId(req.session.transaksi._id)
        
        try {
            await database.collection('mytryout').updateOne(
                { "_id": transaksiId },
                { $set: {
                    "bukti_bayar": confirmationImageLink
                } }
            )

            res.redirect('/dashboard')
        } catch(err) {
            console.log(err)
        }
    })

    server.post('/control/change-payment-status', async (req, res) => {
        // console.log(req.body)

        const client = await clientPromise
        const database = client.db(process.env.MONGODB_NAME)
        try {
            await database.collection("mytryout").updateOne(
                { "_id": req.body.transaksi._id },
                {
                    $set: {
                        "status": req.body.status
                    }
                }
            )
            res.send("success").status(200)
        } catch(err) {
            console.log(err)
            res.send("failed").status(400)
        }

        res.send(req.body).status(200)
    })

    server.post('/add/tryout', async (req, res) => {
        const client = await clientPromise
        const database = client.db(process.env.MONGODB_NAME)

        const tryoutData = await database.collection("tryout").find({ nama: req.body.nama }).toArray()

        if(tryoutData.length > 0) {
            // If tryout name already exist
            req.flash('message', 'Tryout already exist!')
            res.redirect('/admin/tryout')
        } else {
            try {
                await database.collection('tryout').insertOne({
                    "nama": req.body.nama,
                    "created_at": new Date().toJSON().slice(0, 10),
                    "deadline": req.body.deadline,
                    "harga": parseInt(req.body.harga),
                    "status": "CLOSED",
                    "subtryout": []
                })

                req.flash('message', 'Tryout berhasil dibuat!')
                res.redirect('/admin/tryout')
            } catch(err) {
                console.log(err)
            }
        }
    })

    server.post('/add/subtryout', async (req, res) => {
        /**
         * req.body = {
         *      nama: String,
         *      jenis: String,
         *      waktu_pengerjaan: Integer,
         *      id_tryout: String
         * }
         */

        const idTryout = new ObjectId(req.body.id_tryout)

        const client = await clientPromise
        const database = client.db(process.env.MONGODB_NAME)

        const subtryoutId = new ObjectId()

        try {
            await database.collection('subtryout').insertOne({
                "_id": subtryoutId,
                "nama": req.body.nama,
                "jenis": req.body.jenis,
                "waktu_pengerjaan": req.body.waktu_pengerjaan,
                "soal": []
            })

            try {
                await database.collection('tryout').updateOne(
                    { "_id": idTryout },
                    {
                        $push: {
                            "subtryout": subtryoutId.toString()
                        }
                    }
                )
                req.flash("message", "SubTryout berhasil ditambah!")
                res.redirect(`/admin/subtryout/${idTryout}`)
            } catch(err) {
                console.log(err)
            }
        } catch(err) {
            console.log(err)
        }
    })

    server.post('/add/soal', async (req, res) => {
        /**
         * req.body = {
         *      isi: String,
         *      jawaban: String,
         *      bobot: Double,
         *      pilihan_1: String,
         *      pilihan_2: String,
         *      pilihan_3: String,
         *      pilihan_4: String,
         *      pilihan_5: String,
         *      id_subtryout: String
         * }
         */

        const subtryoutId = new ObjectId(req.body.id)
        const pilihan = [
            req.body.pilihan_1,
            req.body.pilihan_2,
            req.body.pilihan_3,
            req.body.pilihan_4,
            req.body.pilihan_5
        ]

        const client = await clientPromise
        const database = client.db(process.env.MONGODB_NAME)

        const soalId = new ObjectId()

        try {
            await database.collection('soal').insertOne({
                "_id": soalId,
                "isi": req.body.isi,
                "jawaban": req.body.jawaban,
                "bobot": req.body.bobot,
                "pilihan": pilihan,
                "pembahasan": {
                    "isi": "",
                    "link_video": "",
                }
            })

            try {
                await database.collection('subtryout').updateOne(
                    { "_id": subtryoutId },
                    {
                        $push: {
                            "soal": soalId.toString()
                        }
                    }
                )
                req.flash('message', 'Soal berhasil ditambah!')
                res.redirect(`/admin/soal/${subtryoutId}`)
            } catch(err) {
                console.log(err)
            }
        } catch(err) {
            console.log(err)
        }

    })

    server.post('/add/discuss/topik', async (req, res) => {
        const data = {
            "nama": req.session.user.nama,
            "isi": req.body.isi,
            "komentar": []
        }
        const tryoutId = new ObjectId(req.body.id_tryout)

        const client = await clientPromise
        const database = client.db(process.env.MONGODB_NAME)

        try {
            await database.collection("tryout").updateOne(
                { "_id": tryoutId },
                {
                    $push: {
                        "discussion": data
                    }
                }
            )
            res.redirect(`/discuss/${req.body.id_tryout}`)
        } catch(err) {
            console.log(err)
            res.redirect(`/discuss/${req.body.id_tryout}`)
        }
    })

    server.post('/add/discuss/komentar', async (req, res) => {
        const data = {
            "nama": req.session.user.nama,
            "isi": req.body.isi
        }
        const index = req.body.topik_index
        const tryoutId = new ObjectId(req.body.id_tryout)
        // const topik = req.session.discuss[index]
        // topik.komentar = [...topik.komentar, data]
        req.session.discuss.discussion[index].komentar = [...req.session.discuss.discussion[index].komentar, data]

        const client = await clientPromise
        const database = client.db(process.env.MONGODB_NAME)

        try {
            await database.collection("tryout").updateOne(
                { "_id": tryoutId },
                {
                    $set: {
                        "discussion": req.session.discuss.discussion
                    }
                },
            )
            res.redirect(`/discuss/${req.body.id_tryout}`)
        } catch(err) {
            console.log(err)
            res.redirect(`/discuss/${req.body.id_tryout}`)
        }
    })

    // API Calls
    server.get('/api/users ', async (req, res) => {
        const client = await clientPromise
        const database = client.db(process.env.MONGODB_NAME)
        const result = await database.collection("user").find({}).toArray()

        res.send(result).status(200)
    })

    server.get('/api/users/:id', async (req, res) => {
        const client = await clientPromise
        const database = client.db(process.env.MONGODB_NAME)
        const id = ObjectId(req.params.id)
        const result = await database.collection("user").find({ _id: id}).toArray()

        res.send(result).status(200)
    })

    server.get('/api/tryouts', async (req, res) => {
        const client = await clientPromise
        const database = client.db(process.env.MONGODB_NAME)
        const result = await database.collection("tryout").find({}).toArray()
        
        res.send(result).status(200)
    })

    server.get('/api/tryout/:id', async (req, res) => {
        const client = await clientPromise
        const database = client.db(process.env.MONGODB_NAME)
        const id = new ObjectId(req.params.id)
        const tryoutData = await database.collection("tryout").findOne({ _id: id })

        const result = {
            "_id" : tryoutData._id,
            "nama" : tryoutData.nama,
            "created_at" : tryoutData.created_at,
            "deadline" : tryoutData.deadline,
            "harga" : tryoutData.harga,
            "status" : tryoutData.status,
            "subtryout" : []
        }

        for(let subtryoutId of tryoutData.subtryout) {
            const id = new ObjectId(subtryoutId)
            const subtryoutData = await database.collection("subtryout").findOne({ _id: id })

            const subtryoutRes = {
                "_id" : subtryoutData._id,
                "nama" : subtryoutData.nama,
                "jenis" : subtryoutData.jenis,
                "waktu_pengerjaan" : subtryoutData.waktu_pengerjaan,
                "soal" : []
            }

            for(let soalId of subtryoutData.soal) {
                const id = new ObjectId(soalId)
                const soalData = await database.collection("soal").findOne({ _id: id })
                subtryoutRes.soal = [...subtryoutRes.soal, soalData]
            }

            result.subtryout = [...result.subtryout, subtryoutRes]
        }

        res.send(result).status(200)
    })

    server.get('/api/mytryout/:id', async (req, res) => {
        const id = new ObjectId(req.params.id)
        const client = await clientPromise
        const database = client.db(process.env.MONGODB_NAME)
        const myTryoutData = await database.collection("mytryout").findOne({ "_id": id })

        const result = {
            "_id": myTryoutData._id,
            "id_tryout": myTryoutData.id_tryout,
            "status": myTryoutData.status,
            "hasil": myTryoutData.hasil,
        }

        res.send(result).status(200)
    })

    server.get('/api/mytryouts/:id', async (req, res) => {
        const idUser = new ObjectId(req.params.id)
        const client = await clientPromise
        const database = client.db(process.env.MONGODB_NAME)
        const userData = await database.collection('user').findOne({ "_id": idUser })
        const myTryouts = userData.tryouts
        // const tryouts = new ObjectId(req.session.user.tryouts)
        if(myTryouts.length <= 0) {
            res.send({ "zero_data": true }).status(400)
        }

        let result = []
        
        for(let myTryout of myTryouts) {
            const myTryoutId = new ObjectId(myTryout)
            const myTryoutData = await database.collection('mytryout').findOne({ "_id": myTryoutId })
            const tryoutId = new ObjectId(myTryoutData.id_tryout)
            const tryoutData = await database.collection('tryout').findOne({ "_id": tryoutId })

            const resTemp = {
                "_id": myTryoutData._id,
                "id_tryout": tryoutData._id,
                "nama": tryoutData.nama,
                "created_at": tryoutData.created_at,
                "deadline": tryoutData.deadline,
                "status": myTryoutData.status,
            }

            result = [...result, resTemp]
        }

        res.send(result).status(200)
    })

    server.get('/api/transaksi', async (req, res) => {
        const client = await clientPromise
        const database = client.db(process.env.MONGODB_NAME)
        const myTryoutData = await database.collection("mytryout").find({}).toArray()

        let result = []

        for(let mytryout of myTryoutData) {
            const temp = {
                "_id": mytryout._id,
                "id_tryout": mytryout.id_tryout,
                "status": mytryout.status,
                "bukti_bayar": mytryout.bukti_bayar,
                "harga": mytryout.harga,
                "method": mytryout.method,
            }
            const tryoutId = new ObjectId(temp.id_tryout)

            const tryoutData = await database.collection('tryout').findOne({ "_id": tryoutId })
            temp.nama_tryout = tryoutData.nama

            result = [...result, temp]
        }

        res.send(result).status(200)
    })

    server.get('/api/discussion/:id', async (req, res) => {
        const id = new ObjectId(req.params.id)

        const client = await clientPromise
        const database = client.db(process.env.MONGODB_NAME)
        const tryoutData = await database.collection('tryout').findOne({ "_id": id })

        const result = {
            "_id": id,
            "nama": tryoutData.nama,
            "discussion": tryoutData.discussion,
        }

        res.send(result).status(200)
    })

    // =========================================

    // Untuk handle route halaman
    server.get('*', (req,res) => {
        return handle(req,res)
    })

    server.listen(port, (err) => {
        if(err) throw err
    })
})

module.exports = app