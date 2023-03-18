const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemvc', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try{
    sequelize.authenticate()
    console.log('conectamos ao mysql')
}catch(err){
    console.log('Não foi possível conectar: ' + err)
}

module.exports = sequelize