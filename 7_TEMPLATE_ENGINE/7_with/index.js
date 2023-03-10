const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.engine('handlebars', exphbs.engine())
app.set("view engine", 'handlebars')

app.get('/dashboard', (req, res) => {

    const itens = ["A", "B", "C"]

    res.render('dashboard', {itens})
})

app.get('/post', (req, res) => {
    const post ={
        title: 'Aprender nodejs',
        category: 'Javascript',
        body: 'Este arquivo vai te ajudar a aprender Node.js',
        comments: 4
    }

    res.render('blogpost', {post})
})

app.get('/', (req, res) => {
    const user = {
        name: "guilherme",
        surname: 'lima',
        age: '21'
    }


    const palavra = 'teste'

    const auth = false

    const approved = false

    res.render('home', {user: user, palavra, auth, approved})
})

app.listen(3000, () => {
    console.log('App rodando na porta 3000')
})