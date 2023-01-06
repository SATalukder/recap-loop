var bottleColor = "yellow";

var waterQuantity = 1;

var isFull = false;

// array
var items = ['bottol', 'mug', 'paper', 'pen'];
items.indexOf('paper');  // -1

items.push('watch');
items.push('envelope');


items.pop();

// conditions

if (items.length >= 4) {
    console.log('you have too many stuff on your desk.');
}
else if (items.length == 4) {
    console.log('you have only one hali items');
}

else {
    console.log('Wow ! you have a clean desk');
}