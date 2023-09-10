let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

function copyObj(sourceObj, keysToCopy) {
  if (!keysToCopy) {
    // If keysToCopy argument is omitted, copy all existing keys
    keysToCopy = Object.keys(sourceObj);
  }

  const newObj = {};
  
  keysToCopy.forEach(function(key) {
    newObj[key] = sourceObj[key];
  });
  
  return newObj;
}

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }
