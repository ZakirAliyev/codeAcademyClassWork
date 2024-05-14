const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser")
const cors = require("cors")
const uuid = require("uuid")

let products = require('./db/db');

app.get('/products', (req, res) => {
  if (products.length > 0) {
    res.status(200).send(products)
  } else {
    res.json({
      message: "Array bosdur",
      statusCode: 204,
    })
  }
})

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  const product = products.find(product => product.id === id)
  if (product) {
    res.send(product)
  } else {
    res.json({
      message: "Obyekt tapilmadi",
      statusCode: 204,
    })
  }
})

app.delete('/products/:id', (req, res) => {
  const { id } = req.params;
  const idx = products.findIndex((x) => x.id == id);
  const deleted = products.find((x) => x.id == id);
  if (deleted) {
    products.splice(idx, 1);
    res.json({
      message: "Silindi!",
      statusCode: 200
    })
  } else {
    res.json({
      message: "Error qaqa!",
      statusCode: 404
    })
  }
})

app.post('/products/:id', (req, res) => {
  const {title, price, describe, category, image, rating} = req.body;
  const pro
}

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})