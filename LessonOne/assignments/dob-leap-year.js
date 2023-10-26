import readLineSync from 'readline-sync';
import chalk from 'chalk';

function welcomeUser() {
    let userName = readLineSync.question(chalk.inverse('Please Type your name:') + ' ');
    console.log();
    console.log(chalk.bold.underline.bgBlue("Hi " + userName + ", Welcome to Program to check Leap year DOB!"));
}

function startCheck() {
    console.log();
    
    let userDOB = readLineSync.question(chalk.magentaBright("Enter your Date of Birth (as dd/mm/yyyy)- "));

    console.log();

    if ( userDOB.split('/').length !== 3 || isNaN(Number(userDOB.split('/')[2])) ) {
        console.log(chalk.bold.redBright.inverse('You have entered invalid date of birth.'));
    } else if ( Number(userDOB.split('/')[2]) % 4 === 0 ) {
        console.log(chalk.bold.greenBright.inverse('Yay! Your date of birth comes under Leap year. Share this on social media.'));
    } else {
        console.log(chalk.bold.yellowBright.inverse('Sadly, Your date of birth comes under non-leap year.'));
    }
}

welcomeUser();
startCheck();