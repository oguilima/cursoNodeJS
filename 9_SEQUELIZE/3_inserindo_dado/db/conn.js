const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodesequelize', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})
/*
try{
    sequelize.authenticate()

    console.log('conectamos com sucesso com o sequelize')
    
}catch(err){
    console.log('nao foi possível se conectar ao banco de dados ' + err )
}   
*/

module.exports = sequelize