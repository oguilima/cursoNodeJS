const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine)
app.set("view engine", 'handlebars')

app.use(express.static('public'))

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

app.get('/blog', (req, res) =>{
    const posts = [{
        title: 'Aprender Nodejs',
        category: 'Javascript',
        body: 'TESTE',
        comments: 4
    },{
        title: 'Aprender php',
        category: 'php',
        body: 'TESTE2',
        comments: 3
    },{
        title: 'Aprender Java',
        category: 'Java',
        body: 'TESTE3',
        comments: 2
    }]

    res.render('blog', {posts})

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