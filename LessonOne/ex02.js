/*
    A program to read input from your user. Output this name. Use readlineSync() for this.

    -> add readlineSync() as a dependency
    -> import it in your index.js
    -> know how to read docs and use it. In programming, it is extremely important to read docs.
    -> use a variable to store this name.
    -> output this name.
*/

const readlineSync = require('readline-sync');

let userName = readlineSync.question('Enter your name: ');

console.log('Your name is ' + userName);