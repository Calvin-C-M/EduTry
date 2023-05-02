require('dotenv').config({ path:'./.env.local' })

const express = require("express")
const next = require("next")

const port = process.env.PORT
const hostname = process.env.HOSTNAME

const dev = process.env.ENVIRONMENT !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
    const server = express()

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
        console.log("Dashboard")
        return app.render(req, res, '/dasboard', req.query)
    })

    server.get('/intro-tryout', (req, res) => {
        return app.render(req, res, '/intro-tryout', req.query)
    })

    server.get('/tryouts', (req, res) => {
        console.log("Tryouts")
        return app.render(req, res, '/tryouts', req.query)
    })

    server.get('/admin/tryout', (req, res) => {
        return app.render(req, res, '/admin/tryout', req.query)
    })

    server.get('/admin/subtryout', (req, res) => {
        return app.render(req, res, '/admin/subtryout', req.query)
    })

    server.get('/admin/pembayaran', (req, res) => {
        return app.render(req, res, '/admin/pembayaran', req.query)
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