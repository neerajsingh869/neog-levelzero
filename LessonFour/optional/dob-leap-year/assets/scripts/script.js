let userNameInput = document.querySelector('#user-name-input');
let playGameButton = document.querySelector('#play-game-button');

playGameButton.addEventListener('click', e => {
    e.preventDefault();
    console.log('heelo');

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

        if ( userDOB.split('-').length !== 3 || isNaN(Number(userDOB.split('-')[0])) || isNaN(Number(userDOB.split('-')[1])) || isNaN(Number(userDOB.split('-')[2]))) {
            outputText = 'You have entered invalid date of birth.';
        } else if ( Number(userDOB.split('-')[0]) % 4 === 0 ) {
            outputText = 'Yay! Your date of birth comes under Leap year. Share this on social media.';
        } else {
            outputText = 'Sadly, Your date of birth comes under non-leap year.';
        }

        let outputTextContainer = document.querySelector('#output-text-container');

        outputTextContainer.innerHTML = `<p class="output-text" id="final-output-text">
            ${ outputText }
        </p>`;

    })

    console.log('hello');
})