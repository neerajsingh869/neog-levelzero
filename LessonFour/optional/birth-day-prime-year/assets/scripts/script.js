let userNameInput = document.querySelector('#user-name-input');
let playGameButton = document.querySelector('#play-game-button');

function isPrime(num) {
    let rootN = Math.ceil(Math.sqrt(num));

    for (let i = 2; i <= rootN; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

playGameButton.addEventListener('click', e => {
    e.preventDefault();

    let gameContainer = document.querySelector('#game-container');

    let userName = userNameInput.value;

    gameContainer.innerHTML = `<div id="welcome-user-container">
        <p class="output-text" id="welcome-user-text">
            Hi ${ userName }, Welcome to Program to check Leap year DOB!
        </p>
    </div>
    <input type="date" id="date-input">
    <button id="output-button">Check</button>
    <div id="output-text-container">
    </div>`;

    

    let outputButton = document.querySelector('#output-button');

    outputButton.addEventListener('click', e => {
        e.preventDefault();

        let dateInput = document.querySelector('#date-input');
        let userDOB = dateInput.value;

        let outputText = "";

        let parsedUserDOB = userDOB.split('-');

        if ( parsedUserDOB.length != 3 || 
            isNaN(Number(parsedUserDOB[1])) ||
            isNaN(Number(parsedUserDOB[2])) || 
            Number(parsedUserDOB[2] > 31 || 
            Number(parsedUserDOB[1] > 12 )) ) {
            outputText = 'You have entered invalid date of birth.';
        } else if ( isPrime(Number(parsedUserDOB[2] + parsedUserDOB[1])) ) {
            outputText = 'Yay! Your date of birth construct a prime number.' + 
            ' Share this on social media.';
        } else {
            outputText = 'Sadly, Your date of birth does not construct a prime number.';
        }

        let outputTextContainer = document.querySelector('#output-text-container');

        outputTextContainer.innerHTML = `<p class="output-text" id="final-output-text">
            ${ outputText }
        </p>`;

    })

    console.log('hello');
})