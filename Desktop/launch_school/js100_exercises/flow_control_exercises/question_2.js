function evenOrOdd (x){
  if (Number.isInteger(x)=== true) {
    if (x%2 > 0) {
      return console.log('odd')
    }
    else {
      return console.log ('even')
    }
  }
  else {
    return console.log('The argument is not an integer.')
  }
}

evenOrOdd(5.145);
