const express = require('express')
const app = express()


app.use(
    express.urlencoded({
        extended: true
    })
)


app.use(express.json())



//rotas endpoints


app.post("/createproduct", (req, res) =>  {
    const name = req.body.name
    const price = req.body.price

    console.log(`Name: ${name} Price: ${price}`)

    res.json({message: `O produto ${name} foi cadastrado!`})

})


app.get("/", (req, res) => {
    res.json({
        message: "Primeira rota criada com sucesso"
    })
})


app.listen(3000)