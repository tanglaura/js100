let rlSync = require('readline-sync');
let base_age = Number(rlSync.question("How old are you? "));

console.log(`You are ${base_age} years old.`);
/*console.log(`In 10 years, you will be ${base_age + 10} years old.`)
console.log(`In 20 years, you will be ${base_age + 20} years old.`)
console.log(`In 30 years, you will be ${base_age + 30} years old.`)
console.log(`In 40 years, you will be ${base_age + 40} years old.`)*/

for (let future =10; future <=40; future +=10){
  console.log(`In ${future} years, you will be ${base_age+future} years old.`)
}