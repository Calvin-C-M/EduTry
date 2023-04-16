import { MongoClient } from 'mongodb'
require('dotenv').config({ path: './.env.local' })

const mongoDbUri = process.env.MONGODB_URI || ""

const client = new MongoClient(mongoDbUri)

let clientPromise

try {
    clientPromise = client.connect()
    console.log("Database connected")
} catch(err) {
    console.log(err)
}

export default clientPromise;