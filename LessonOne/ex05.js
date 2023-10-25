// Ask your user if your age is greater than 25 (or any number) and console right/wrong based on the answer.

const readLineSync = require('readline-sync');

let userName = readLineSync.question('Is your age greater than 25? ', {
    trueValue: ['yes', 'y', 'yeah', 'yep'],
    falseValue: ['no', 'n', 'nah', 'nope']
});

if (userName === true) {
    console.log('Right');
} else if (userName === false) {
    console.log('Wrong');
} else {
    console.log('Invalid input');
}