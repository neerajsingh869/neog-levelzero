// A program to take your user's name. Then welcome them.

const readLineSync = require('readline-sync');

let userName = readLineSync.question('Enter your name : ');

console.log('Welcome ' + userName + '!');