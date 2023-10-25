// A program to take a string. And add "Welcome" to it. Then console it.

const readLineSync = require('readline-sync');

let str = readLineSync.question('Enter any string : ');

let newStr = str + 'Welcome';

console.log(newStr);