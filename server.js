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
        console.log("Hello")
        return app.render(req, res, '/index', req.query)
    })

    server.get('/test', (req,res) => {
        console.log("Test")
        return app.render(req, res, '/test', req.query)
    })

    server.get('/dashboard', (req, res) => {
        loginBlocker(req, res)
        return app.render(req, res, '/dashboard', req.query)
    })

    server.get('/intro-tryout', (req, res) => {
        loginBlocker(req, res)
        return app.render(req, res, '/intro-tryout', req.query)
    })

    server.get('/tryouts', (req, res) => {
        loginBlocker(req, res)
        return app.render(req, res, '/tryouts', req.query)
    })

    server.get('/my-tryouts', (req, res) => {
        loginBlocker(req, res)
        return app.render(req, res, '/my-tryouts', req.query)
    })
    
    server.get('/discuss', (req, res) => {
        loginBlocker(req, res)
        return app.render(req, res, '/discuss', req.query)
    })
  
    server.get('/result', (req, res) => {
        return app.render(req, res, '/result', req.query)

    server.get('/questions', (req, res) => {
        return app.render(req, res, '/questions', req.query)
    })

    server.get('/answer', (req, res) => {
        return app.render(req, res, '/answer', req.query)
    })

    server.get('/purchase', (req, res) => {
        return app.render(req, res, '/purchase', req.query)
    })

    server.get('/payment', (req, res) => {
        return app.render(req, res, '/payment', req.query)
    })

    server.get('/admin/tryout', (req, res) => {
        loginBlocker(req, res)
        return app.render(req, res, '/admin/tryout', req.query)
    })

    server.get('/admin/subtryout', (req, res) => {
        loginBlocker(req, res)
        return app.render(req, res, '/admin/subtryout', req.query)
    })

    server.get('/admin/pembayaran', (req, res) => {
        loginBlocker(req, res)
        return app.render(req, res, '/admin/pembayaran', req.query)
    })

    server.get('/login', (req, res) => {
        console.log(req.flash('message'))
        return app.render(req, res, '/test-login', req.query)
    })

    server.get('/register', (req, res) => {
        console.log(req.flash('message'))
        return app.render(req, res, '/test-register', req.query)
    })
    
    // Contollers
    server.post('/control/login', async (req, res) => {
        const inputData = req.body

        const client = await clientPromise
        const database = client.db(process.env.MONGODB_NAME)
        const accountData = await database.collection("account").find({ username: inputData.username }).toArray()

        if(accountData.length < 1 || inputData.password != accountData[0].password) {
            req.flash('message', 'Invalid Login!')
            res.redirect('/login')
        } else {
            req.session.isLoggedIn = true
            switch(accountData[0].role) {
                case "USER":
                    const userData = await database.collection("user").find({ id_account: accountData[0]._id.toString() }).toArray()
                    req.session.user = {
                        nama: userData[0].nama,
                        email: userData[0].email,
                        kontak: userData[0].kontak,
                        tryouts: userData[0].tryouts,
                        pilihan: userData[0].pilihan,
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
            res.redirect('/register')
        } else if(userData.length > 0) {
            req.flash('message', 'Email is already registered!')
            res.redirect('/register')
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
                id_account: account[0]._id
            })
            
            req.flash('message', 'Pendaftaran berhasil!')
            res.redirect('/login')
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

    server.get('/api/tryouts/:id', async (req, res) => {
        const client = await clientPromise
        const database = client.db(process.env.MONGODB_NAME)
        const id = ObjectId(req.params.id)
        const result = await database.collection("tryout").find({ _id: id }).toArray()

        res.send(result).status(200)
    })

    server.get('/api/subtryouts/:id', async (req, res) => {
        const client = await clientPromise
        const database = client.db(process.env.MONGODB_NAME)
        const id = ObjectId(req.params.id)
        const result = await database.collection("subtryout").find({ _id: id }).toArray()

        res.send(result).status(200)    
    })

    server.get('/api/soal/:id', async (req, res) => {
        const client = await clientPromise
        const database = client.db(process.env.MONGODB_NAME)
        const id = ObjectId(req.params.id)
        const result = await database.collection("soal").find({ _id: id }).toArray()

        res.send(result).status(200)    
    })

    // =========================================

    // Untuk handle route halaman
    server.get('*', (req,res) => {
        return handle(req,res)
    })

    server.listen(port, (err) => {
        if(err) throw err
        console.log(`Server running on https://${hostname}:${port}`)
    })
})