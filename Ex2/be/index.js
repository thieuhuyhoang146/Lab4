const mongoose = require('mongoose');
const Card = require('./dbCards.js');
require('dotenv').config();
const cors = require('cors');
const express = require('express');


var app = express()
const port = process.env.PORT
const connection_url = 'mongodb+srv://hthiu:Hoangthieu146@cluster0.klubewi.mongodb.net/?retryWrites=true&w=majority'
app.use(express.json())
app.use(cors())

try {
    mongoose.connect(connection_url);
    console.log('database successfully connected');
} catch (error) {
    throw error;
}


app.get("/", (req, res) => res.status(200).send("Server is running"))

app.post("/dating/cards", (req, res) => {
    const dbCards = req.body
    console.log(dbCards);
    Card.create(dbCards, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.get("/dating/cards", (req, res) => {
    Card.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.listen(port, () => console.log(`Listening on localhost: http://localhost:${port}`))