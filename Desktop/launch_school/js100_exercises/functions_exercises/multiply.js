let rlSync = require('readline-sync');

let first_number= parseFloat(rlSync.question("Enter the first number:\n"));
let second_number= parseFloat(rlSync.question("Enter the second number:\n"));

function multiply() {
  return first_number * second_number
}

console.log(`${first_number} * ${second_number} = ${multiply()}`);