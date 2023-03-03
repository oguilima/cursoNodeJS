const fs = require('fs') // modulo file system

     // caminho do arquivo, linguagem, resultado (erro ou retorno)
fs.readFile('arquivo.txt', 'utf8', (err, data) => {
    if(err){
        console.log("🚀 ~ file: index.js:6 ~ fs.readFile ~ erro ", err)
        return
    }else{
        console.log("🚀 ~ file: index.js:8 ~ fs.readFile ~ data ", data)
    }
});