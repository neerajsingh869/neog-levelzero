let translateButton = document.querySelector('#translate-button');
let outputTextArea = document.querySelector('#translated-text-area');

// disable output box
outputTextArea.disabled = true;

// add event listener on translate button to 
// translate input text
translateButton.addEventListener('click', e => {
    e.preventDefault();

    let textToTranslate = document.querySelector('#input-text-area').value;

    const url = 'https://api.funtranslations.com/translate/minion.json';
    
    // make call to funtranslations server to get back
    // translated text
    fetch(`${ url }?text=${ textToTranslate }`)
        .then(res => {
            return res.json();
        }).then(translatedTextObj => {
            outputTextArea.innerText = translatedTextObj.contents.translated;
        }).catch(err => {
            console.error(err.stack);
        });
});