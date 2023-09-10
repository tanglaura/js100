/*function factorial (num){
  if (num ===0 || num ===1){
    return 1;
  }
  for (let i = num-1; i>0; i-=1) {
    num = num * i 
  }
  return num;
}*/

function factorial (num){
  if (num <0){
    return -1
  }
  else if (num ==0){
    return 1
  }
  else{
    return (num * factorial (num-1))
  }
}
console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8)); 
console.log(factorial(9)); 
console.log(factorial(10)); 