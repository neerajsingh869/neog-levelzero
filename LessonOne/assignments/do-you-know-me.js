import readLineSync from 'readline-sync';
import chalk from 'chalk';

let score = 0;

const quizQuestions = [
    {
        question: "What's my Full name?",
        options: ["Neeraj Kumar Singh", "Neeraj", "Neeraj Kumar", "Neeraj Singh"],
        answer: "Neeraj Kumar Singh"
    },
    {
        question: "Where do I live?",
        options: ["Indore", "Delhi", "Varanasi", "Jaipur"],
        answer: "Varanasi"
    },
    {
        question: "From where I did my B-Tech?",
        options: ["IIT Bombay", "IIT Delhi", "NIT Prayagraj", "IIT BHU"],
        answer: "IIT Delhi"
    },
    {
        question: "Which was my first anime?",
        options: ["Death Note", "Naruto", "Demon Slayer", "One Piece"],
        answer: "Naruto"
    },
    {
        question: "What's my Father's occupation?",
        options: ["Farmer", "Engineer", "Doctor", "Polic Officer"],
        answer: "Farmer"
    },
    {
        question: "In which year I completed my 12th?",
        options: ["2016", "2017", "2018", "2019"],
        answer: "2017"
    },
    {
        question: "Which God I believe in?",
        options: ["Krishna", "Ram", "Hanuman", "Mahadev"],
        answer: "Ram"
    },
    {
        question: "Which anime is my favourite?",
        options: ["Naruto", "Bleach", "Demon Slayer", "Jobless Reincarnation"],
        answer: "Naruto"
    },
    {
        question: "What's my real birth year?",
        options: ["1998", "1999", "2000", "2001"],
        answer: "1999"
    },
    {
        question: "What is my favourite color?",
        options: ["Green", "Orange", "Blue", "Pink"],
        answer: "Blue"
    }
];

const highScorers = [
    {
        name: 'Neeraj',
        score: 10
    },
    {
        name: 'Anmol',
        score: 9
    },
    {
        name: 'Shiv',
        score: 8
    }
]

function welcomeUser() {
    let userName = readLineSync.question(chalk.inverse('Please Type your name:') + ' ');
    console.log();
    console.log(chalk.bold.underline.bgBlue("Hi " + userName + ", Welcome to Naurto's Quiz!"));
}

function startGame() {
    function play(problemNum, problem) {
        let problemOptions = problem.options;
        let userAnswerIdx = readLineSync.keyInSelect(problemOptions, 
                                                    chalk.bold.magentaBright("Q" + problemNum + " " + problem.question + " "), 
                                                    {cancel: 'Skip'});
                                                    
        if (userAnswerIdx === -1) {
            console.log(chalk.yellow('************* SKIPPED *************'));
        }
        else if (problemOptions[userAnswerIdx].toLowerCase() === problem.answer.toLowerCase()) {
            score++;
            console.log(chalk.green('************* CORRECT *************'));
        } else {
            console.log(chalk.red('************* INCORRECT *************'));
        }
        
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

    console.log();
    console.log(chalk.underline('Hurray! You scored ' + chalk.bold.green(score) + ' points.'));
    console.log();

    if (score >= maxScore) {
        console.log(chalk.bold.italic.bgMagenta('Congratulations! You made high score. ' + 
                                                'Send screenshot to update the max scorers list.'));
        console.log();
    }
    
    console.log(chalk.bold.cyanBright('============ Checkout High Scorers ============'));
    console.log();

    for (let user of highScorers) {
        console.log(chalk.bold.cyanBright(user.name + ' ' + chalk.magentaBright('=>') + ' ' + user.score));
    }
}

welcomeUser();
startGame();
displayScore();