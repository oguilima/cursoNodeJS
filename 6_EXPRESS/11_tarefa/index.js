const express = require("express")
const app = express()
const port = 5000

const path = require('path');

app.use(
    express.urlencoded({
        extended: true,

    }),
)

app.use(express.json())


app.use(express.static('public'))


const basePath = path.join(__dirname, 'templates')


app.get('/page1', (req, res) => {
    res.sendFile(`${basePath}/page1.html`)
})

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/page2.html`)
})


app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})