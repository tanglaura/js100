let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];
function allMatches(array, regex) {
  return array.filter(element => regex.test(element));
}

//array.filter -> create a new array containing all elements from the original array that pass a certain test. 

//pattern.test -> check whether a string matches a regular expression.
// It returns true if the string matches the regular expression, and false otherwise.

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']

