const readLineSync = require('readline-sync');

let score = 0;

const quizQuestions = [
    {
        question: "What's Naruto's mom's name?",
        options: ["Kushina", "Kurama", "Haruno", "Sakura"],
        answer: "Kushina"
    },
    {
        question: "What's Naruto's fathers's name?",
        options: ["Kakashi", "Minato", "Jiraya", "Obito"],
        answer: "Minato"
    },
    {
        question: "How many tails does Kurama have?",
        options: ["7", "8", "4", "9"],
        answer: "9"
    },
    {
        question: "What team is Kakashi the leader of?",
        options: ["6", "3", "9", "7"],
        answer: "7"
    },
    {
        question: "Who was the youngest ninja graduate from the academy?",
        options: ["Itachi", "Obito", "Kakashi", "Sasuke"],
        answer: "Kakashi"
    },
];

const highScorers = [
    {
        name: 'Neeraj',
        score: 5
    },
    {
        name: 'Anmol',
        score: 5
    },
    {
        name: 'Shiv',
        score: 4
    }
]

function welcomeUser() {
    let userName = readLineSync.question('Please Type your name: ');

    console.log("Hi " + userName + ", Welcome to Naurto's Quiz!")
    console.log();
}

function startGame() {
    function play(problemNum, problem) {
        let problemOptions = problem.options;
        let userAnswerIdx = readLineSync.keyInSelect(problemOptions, 
                                                    "Q" + problemNum + " " + problem.question + " ", 
                                                    {cancel: 'Skip'});
                                                    
        if (userAnswerIdx === -1) {
            console.log('************* SKIPPED *************');
        }
        else if (problemOptions[userAnswerIdx].toLowerCase() === problem.answer.toLowerCase()) {
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

function findMaxScore() {
    let maxScore = 0;

    for (let user of highScorers) {
        if (user.score >= maxScore) {
            maxScore = user.score;
        }
    }

    return maxScore;
}

function displayScore() {
    let maxScore = findMaxScore();

    console.log('Hurray! You scored ' + score + ' points.');
    console.log();

    if (score > maxScore) {
        console.log('Congratulations! You have beaten highest score.');
        console.log();
    }
    
    console.log('-------Checkout high scorers of this quiz-------');
    console.log();

    for (let user of highScorers) {
        console.log(user.name + ' -> ' + user.score);
    }
}

welcomeUser();
startGame();
displayScore();