// Function Declarations
function getReminder() {
    console.log('Water the plants');
}

function greetInSpanish() {
    console.log('Buenas tardes.');
}

// Calling a Function
function sayThanks() {
    console.log('Thank you for your purchase! We appreciate your business.');
}

sayThanks();
sayThanks();
sayThanks();

// Parameters and Arguments
function sayThankYou(name) {
    console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}

sayThankYou('Cole');

// Default Parameters
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
}

// Return
function monitorCount(rows, columns) {
    return rows * columns;
}

const numOfMonitors = monitorCount(5, 4);

console.log(numOfMonitors);

// Helper Functions

function monitorCounts(rows, columns) {
    return rows * columns;
}
function costOfMonitors(rows, columns) {
    return monitorCounts(rows, columns) * 200;
}
const totalCost = costOfMonitors(5, 4);

console.log(totalCost);

// Function Expressions
const plantNeedsWater = function(day) {
    if (day === 'Wednesday') {
        return true;
    } else {
        return false;
    }
}

plantNeedsWater('Tuesday');

console.log(plantNeedsWater('Tuesday'));

// Arrow Functions
/*
const plantNeedsWater = (day) => {

}
*/

// Concise Body Arrow Functions
/*
const greaterThanFive = (num) => {
    return num > 5 ? true : false;
}
*/

const greaterThanFive = num => num > 5 ? true : false;