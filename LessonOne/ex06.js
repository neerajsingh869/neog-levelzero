/*
    Ask your user if your hometown is Bokaro (or your city) and this 
    time increment a variable based on the right answer.

    Also, console the score this time.
*/

const readLineSync = require('readline-sync');

let userName = readLineSync.question('Is your hometown is Bokaro? ', {
    trueValue: ['yes', 'y', 'yeah', 'yep'],
    falseValue: ['no', 'n', 'nah', 'nope']
});

let count = 0;

if (userName === true) {
    count++;
}

console.log(count);