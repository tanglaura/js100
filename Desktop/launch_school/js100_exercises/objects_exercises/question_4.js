let obj = {
  b: 2,
  a: 1,
  c: 3,
};

upperKeys = []
let objKeys = Object.keys(obj)

objKeys.forEach(key => upperKeys.push(key.toUpperCase()))
console.log(upperKeys)
