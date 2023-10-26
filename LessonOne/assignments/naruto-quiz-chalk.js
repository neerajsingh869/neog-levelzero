import readLineSync from 'readline-sync';
import chalk from 'chalk';

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
    {
        question: "What's the name of the one-tailed demon sealed inside of Gaara?",
        options: ["Isobu", "Shukaku", "Matabi", "Saiken"],
        answer: "Shukaku"
    },
    {
        question: "Who developed Naruto's signature attack, the Rasengan?",
        options: ["Hashirama Senju", "Tobirama Senju", "Minato Namikaze", "Kakashi Hatake"],
        answer: "Minato Namikaze"
    },
    {
        question: "Who saves Sasuke after he's hit by Killer B's Lariat attack?",
        options: ["Karin", "Jugo", "Orochimaru", "Naruto"],
        answer: "Jugo"
    },
    {
        question: "What is the name of Kakashi's signature move using his Sharingan?",
        options: ["Amaterasu", "Kamui", "Izanagi", "Izanami"],
        answer: "Kamui"
    },
    {
        question: "Whose eye did Danzo steal to use for himself?",
        options: ["Shisui Uchiha", "Fugaku Uchiha", "Obito Uchiha", "Itachi Uchiha"],
        answer: "Shisui Uchiha"
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