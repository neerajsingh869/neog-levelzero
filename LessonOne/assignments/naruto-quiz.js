const readLineSync = require('readline-sync');

let score = 0;

const quizQuestions = [
    {
        question: "What's Naruto's mom's name?",
        answer: "Kushina"
    },
    {
        question: "What's Naruto's fathers's name?",
        answer: "Minato"
    },
    {
        question: "How many tails does Kurama have?",
        answer: "9"
    },
    {
        question: "What team is Kakashi the leader of?",
        answer: "7"
    },
    {
        question: "Who was the youngest ninja graduate from the academy?",
        answer: "Kakashi"
    },
];

function welcomeUser() {
    let userName = readLineSync.question('Please Type your name: ');

    console.log("Hi " + userName + ", Welcome to Naurto's Quiz!")
    console.log();
}

function startGame() {
    function play(problemNum, problem) {
        let userAnswer = readLineSync.question("Q" + problemNum + " " + problem.question + " ");
    
        if (userAnswer.toLowerCase() === problem.answer.toLowerCase()) {
            score++;
            console.log('************* CORRECT *************');
        } else {
            console.log('************* INCORRECT *************');
        }
        
        console.log();
    }
    
    for (let i = 0; i < quizQuestions.length; i++) {
        play(i + 1, quizQuestions[i]);
    }
}

function displayScore() {
    console.log('Hurray! You scored ' + score + ' points.');
}

welcomeUser();
startGame();
displayScore();