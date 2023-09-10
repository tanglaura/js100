let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

 
function findIntegers (things){
  console.log(things.filter(num => Number.isInteger(num)))
}

findIntegers(things)