const { MongoClient } = require("mongodb")
require("dotenv").config({ path:'./.env.local' })

const uri = process.env.MONGODB_URI || ""

let client;
let clientPromise;

try {
    client = new MongoClient(uri)
    clientPromise = client.connect()
    console.log("Database Connected!")
} catch(err) {
    console.error(err)
}

module.exports = clientPromise