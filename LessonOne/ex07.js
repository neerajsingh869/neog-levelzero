// Take two numbers and add them. Put this entire thing in a function add() and return the result

const readLineSync = require('readline-sync');

let numA = readLineSync.questionInt('Enter first number: ');
let numB = readLineSync.questionInt('Enter second number: ');

const add = (a, b) => {
    return a + b;
}

console.log( add(numA, numB) );