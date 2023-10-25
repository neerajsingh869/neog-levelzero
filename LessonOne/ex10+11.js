/*
    -> prepare a list of grocery items to buy.
    -> add 5 items
    -> print the first item on the list.
    -> print the third item on the list.
    -> print the last item on the list.
*/

const readLineSync = require('readline-sync');

let groceryItems = [];

for (let i = 0; i < 5; i++) {
    let groceryItem = readLineSync.question('Enter ' + i + 1 + ' grocery item: ');
    groceryItems.push(groceryItem);
}

// print odd grocery items
for (let i = 0; i < 5; i++) {
    // ex10
    if (i % 2 == 0) {
        console.log(groceryItems[i]);
    }
    // ex11
    // console.log(groceryItems[i]);
}