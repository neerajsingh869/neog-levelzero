// let a = window.prompt('Enter value for a: ');
// console.log(a);

// window.alert('You have entered ' + a + ' as value of a');

let button = document.querySelector('button');
let outputDiv = document.querySelector('#output');
let commentInput = document.querySelector('#comment');


button.addEventListener('click', e => {
    e.preventDefault();

    fetch('https://api.funtranslations.com/translate/yoda.json?text=Hello')
        .then(response => response.json())
        .then(data => {
            outputDiv.innerText = data.contents.translated;
        }).catch(err => {
            console.error(err);
        })
})

console.log(commentInput);

commentInput.addEventListener('click', e => {
    e.preventDefault();

    console.log(e.target.value);
})