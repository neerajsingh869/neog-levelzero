import readLineSync from 'readline-sync';
import chalk from 'chalk';

function welcomeUser() {
    let userName = readLineSync.question(chalk.inverse('Please Type your name:') + ' ');
    console.log();
    console.log(chalk.bold.underline.bgBlue("Hi " + userName + ", Welcome to Program to check Leap year DOB!"));
}

function isPrime(num) {
    let rootN = Math.ceil(Math.sqrt(num));

    for (let i = 2; i <= rootN; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

function startCheck() {
    console.log();
    
    let userDOB = readLineSync.question(chalk.magentaBright("Enter your Date of Birth (as dd/mm)- "));

    console.log();

    let parsedUserDOB = userDOB.split('/');

    if ( parsedUserDOB.length != 2 || 
        isNaN(Number(parsedUserDOB[0])) ||
        isNaN(Number(parsedUserDOB[1])) || 
        Number(parsedUserDOB[0] > 31 || 
        Number(parsedUserDOB[1] > 12 )) ) {
        console.log(chalk.bold.redBright.inverse('You have entered invalid date of birth.'));
    } else if ( isPrime(Number(parsedUserDOB[0] + parsedUserDOB[1])) ) {
        console.log(chalk.bold.greenBright.inverse('Yay! Your date of birth comes under Leap year.' + 
                                                    ' Share this on social media.'));
    } else {
        console.log(chalk.bold.yellow.inverse('Sadly, Your date of birth comes under non-leap year.'));
    }
}

welcomeUser();
startCheck();