const mongoose = require('mongoose')

async function main(){
  await mongoose.connect('mongodb://127.0.0.1:27017/testemongoose')
  console.log('conectou ao mongo com mongoose')
}

main().catch((err) => console.log(err))

module.exports = mongoose