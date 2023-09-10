let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];


function oddLengths (arr){
  let even_odd = arr.map (num => num.length)
  console.log(even_odd.filter(num => num%2 !==0))
}

oddLengths(arr)