/*
    -> use question list
    -> and function to put together a quiz
*/

const readLineSync = require('readline-sync');

let maxScore = 0;

function playQuestionAnswer(question, answer) {
    let userInput = readLineSync.question(question);

    if (userInput === answer) {
        score++;
        console.log('Your answer is correct!');
    } else {
        console.log('Your answer is incorrect!');
    }
}

function startQuiz() {
    let score = 0;

    const questions = [
        {
            question: "Who is my favorite superhero? ",
            answer: "Dhruv"
        },
        {
            question: "Which is my favorite sad song? ",
            answer: "Channa Meraya"
        }
    ];
    
    for (let question of questions) {
        playQuestionAnswer(question.question, question.answer);
    }

    console.log();
    console.log('Your total score: ' + score);
    console.log('Your highest score: ' + maxScore);

    if (score > maxScore) {
        console.log('Congratulations! You have beaten your highest score. Please send your screenshot.');
    }
}

startQuiz();