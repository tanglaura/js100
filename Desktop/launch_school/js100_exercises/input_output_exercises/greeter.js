let rlSync = require('readline-sync');

function name() {
  let first_name= rlSync.question("What's your first name?\n");
  let last_name = rlSync.question("What's your last name?\n");
    return first_name + " " +last_name
}

console.log(`Hello, ${name()}!`);