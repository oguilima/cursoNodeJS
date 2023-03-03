const minimist = require("minimist");

const args = minimist(process.argv.slice(2))
console.log("🚀 ~ file: index.js:4 ~ args", args)

const nome = args["nome"]
console.log("🚀 ~ file: index.js:8 ~ nome", nome)

const profissao = args["profissao"]
console.log("🚀 ~ file: index.js:8 ~ profissao", profissao)
