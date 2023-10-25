/*
    -> Your function should take a question and the right answer.
    -> Ask your user to answer the question.
    -> check the answer and increment score (global variable)
    -> tell your user whether the answer was correct or not
*/

const readLineSync = require('readline-sync');

let score = 0;

function playQuestionAnswer(question, answer) {
    let userInput = readLineSync.question(question);

    if (userInput === answer) {
        score++;
        console.log('Your answer is correct!');
    } else {
        score--;
        console.log('Your answer is incorrect!');
    }
}

playQuestionAnswer('Who is the PM of India? ', 'Modi');