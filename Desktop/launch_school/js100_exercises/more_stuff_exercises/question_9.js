function isNegativeZero(value) {
  // Check if the value is equal to -0 and not equal to 0
  return 1 / value === -Infinity;
}

// Example usage:
console.log(isNegativeZero(-0));   // true
console.log(isNegativeZero(0));    // false
console.log(isNegativeZero(42));   // false
console.log(isNegativeZero(-42));  // false

