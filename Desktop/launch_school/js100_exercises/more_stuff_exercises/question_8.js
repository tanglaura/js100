function isNotANumber(value) {
  return value !== value;
}

// Example usage:
console.log(isNotANumber(5));      // false
console.log(isNotANumber("abc"));  // false
console.log(isNotANumber(NaN));    // true
console.log(isNotANumber(0/0));    // true