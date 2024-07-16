const myFunctions = require ("./maths")
console.log(myFunctions.add(5, 2))
console.log(myFunctions.subtract(5, 2))
console.log(myFunctions.multiply(5, 2))
console.log(myFunctions.divide(10, 2))

const {add, subtract} = require ("./maths")
console.log(add(22, 40))
console.log(subtract(21, 13))

const {multiply, divide} = require ("./maths")
console.log(multiply(20, 10))
console.log(divide(20, 10))
