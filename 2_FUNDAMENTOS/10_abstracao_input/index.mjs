import inquirer from 'inquirer';

inquirer.prompt([
    {
        name: 'p1',
        message: 'qual é a primeira nota ?'
    },
    {
        name: 'p2',
        message: 'Qual é a segunda nota?'
    }]).then(answers => {
        const media = (parseFloat(answers.p1) + parseFloat(answers.p2)) / Object.values(answers).length
        console.log("A média é de: ", media)

    }).catch(err => console.log(err))

