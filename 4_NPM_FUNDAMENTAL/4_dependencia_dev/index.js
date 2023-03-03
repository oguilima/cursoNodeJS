const _ = require('lodash')
const chalk = require('chalk')

const a = [1,2,3,4,5]
const b = [2,6,7,8,9]

const diff = _.difference(a,b)


console.log(chalk.red.bold(diff))
