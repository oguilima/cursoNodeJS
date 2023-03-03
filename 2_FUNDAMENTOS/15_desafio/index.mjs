import inquirer from "inquirer";
import chalk from "chalk";


try{
    inquirer.prompt([
        {
            name: 'p1',
            message: 'Qual o seu nome?'
        },
        {
            name: 'p2',
            message: 'Qual é a sua idade?'
        }]).then(answers => {
            console.log(chalk.bgYellow.black.bold(`O nome é ${answers.p1} e a idade é ${answers.p2}`))
    
        }).catch(err => console.log(err))
}catch(err){
    console.log(err)
}


