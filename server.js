const express = require('express')
const path = require('path')
const cors = require('cors')
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))

const app = express()
const port = 3001

const API_KEY = "e8e3c3452cde1e5099eb545750e9c1da2292bbda373bba71251af274"
const TEXT_RAZOR_URL = "https://api.textrazor.com"

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())

app.post('/api', async (req, res) => {
    const { text } = req.body
    const response = await fetch(TEXT_RAZOR_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "X-TextRazor-Key": API_KEY
      },
      body: `extractors=entities&text=${encodeURIComponent(text)}`
    })
    const data = await response.json()
    res.json(data.response.entities)
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"))
})

app.listen(port, () => {
  console.log("Server běží...")
})
