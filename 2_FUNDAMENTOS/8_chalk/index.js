const chalk = require("chalk")

const nota = 7

if(nota >= 7){
    console.log(chalk.green.bold("Parabéns, vc foi aprovado"))
}else{
    console.log(chalk.bgRed.bold("Reprovado"))
}
