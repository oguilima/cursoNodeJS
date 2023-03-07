//modutos externos
import inquirer from "inquirer";
import chalk from "chalk";

//modulos internos
import fs from "fs";

operation()

function operation() {
    inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: 'O que vc deseja fazer?',
        choices: [
            'Criar conta',
            'Consultar saldo',
            "depositar",
            "sacar",
            "sair"
        ]
    }]).then((answer) => {
        const action = answer['action']

        if (action == 'Criar conta') {
            createAccount()
        }else if(action == "Consultar saldo"){
            getAccountBalance()
        }else if(action == 'depositar'){
            deposit()
        }else if(action == 'sacar'){
            withdraw()
        }else{
            console.log(chalk.bgBlue.black("Obrigado por encerrar o programa"))

            process.exit()
        }

    }).catch((err) => console.log(err))
}

//create an account

function createAccount() {
    console.log(chalk.bgGreen.black('Parabéns por escolher o nosso banco'))
    console.log(chalk.green("Defina as opções da sua conta a seguir"))

    buildAccount()
}

function buildAccount() {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Digite um nome para sua conta'
        }
    ]).then(answer => {
        const accountName = answer['accountName']

        console.info(accountName)

        if(!fs.existsSync('accounts')){
            fs.mkdirSync('accounts')
        }

        if(fs.existsSync(`accounts/${accountName}.json`)){
            console.log(chalk.bgRed.black("essa conta já existe!"))
            buildAccount()
            return
        }

        fs.writeFileSync(`accounts/${accountName}.json`, `{"balance": 0}`, function(err){
           console.log(err) 
        })

        console.log(chalk.green("parabens a conta foi criada"))

        operation()

    }).catch(err => {
        console.log(err)
    })
}

function deposit(){
    inquirer.prompt([{
        name: 'accountName',
        message: 'Qual o nome da sua conta?'
    }]).then((answer) => {
        const accountName = answer['accountName']

        if(!checkAccount(accountName)){
            return deposit()
        }
        
        inquirer.prompt([{
            name: 'amount',
            message: 'Quanto voce deseja depositar?'
        }]).then((answer) => {
            const amount = answer['amount']
            addAmount(accountName, amount)
            operation()


        }).catch(err => console.log(err))

    }).catch(err => console.log(err))
}


function checkAccount(accountName){
    if(!fs.existsSync(`accounts/${accountName}.json`)){
        console.log(chalk.bgRed.black('Essa conta nao existe'))
        return false
    }

    return true
}


function addAmount(accountName, amount){
    const accountData = getAccount(accountName)

    if(!amount){
        console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde'))

        return deposit()
    }

    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)

    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function(err){
          console.log(err)  
        }
    )

    console.log(chalk.green(`Foi depositado o valor de R$ ${amount} na sua conta`))
}

function getAccount(accountName){
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: 'utf8',
        flag: 'r'
    })

    return JSON.parse(accountJSON)
}


function getAccountBalance(){
    inquirer.prompt([{
        name: 'accountName',
        message: 'Qual o nome da sua conta?'
    }]).then((answer) => {

        const accountName = answer['accountName']

        if(!checkAccount(accountName)){
            return getAccountBalance()
        }

        const accountData = getAccount(accountName)

        console.log(chalk.bgBlue.black(` Olá, o saldo da sua conta é de R$ ${accountData.balance}`))

        operation()

    }).catch(err => console.log(err))
}


function withdraw(){
    inquirer.prompt([
        {
        name: 'accountName',
        message: 'Qual o nome da sua conta?'
    }]).then((answer) => {
        const accountName = answer['accountName']

        if(!checkAccount(accountName)){
            return withdraw()
        }

        inquirer.prompt([{
            name: 'amount',
            message: 'Quanto voce deseja sacar?'
        }]).then((answer) => {
            const amount = answer['amount']

            removeAmount(accountName, amount)
        }).catch(err => console.log(err))

    }).catch(err => console.log(err))
}

function  removeAmount(accountName, amount){
    const accountData = getAccount(accountName)

    if(!amount){
        console.log(chalk.bgRed.black("ocorreu um erro, tente novamente mais tarde!"))
        return withdraw()
    }

    if(accountData.balance < amount){
        console.log(chalk.bgRed.black("Valor indisponível"))
        return withdraw()
    }

    accountData.balance = parseFloat(accountData.balance) - parseFloat(amount)

    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function(err){
            console.log(err)
        }
    )

    console.log(chalk.green(`Foi realizado um saque de R$ ${amount} da sua conta`))

    operation()
}