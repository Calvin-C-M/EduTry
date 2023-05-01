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
        return app.render(req, res, '/dashboard', req.query)
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