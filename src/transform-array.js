const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

 function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!')
  }
  const arr2 = [...arr]
 for (let i = 0; i < arr2.length; i++) {
   if (arr2[i] === "--discard-next") {
    if (i === arr2.length-1) {
      arr2.splice(i, 1)
      continue
    }
    if (typeof arr2[i+2] != "number") {
      arr2.splice(i, 3)
      continue
    }
     arr2.splice(i, 2)
   }
   if (arr2[i] === "--discard-prev") {
     if (i === 0) {
       arr2.splice(i, 1)
       continue
     }
    arr2.splice(i-1, 2)
  }
  if (arr2[i] === "--double-next") {
    if (i === arr2.length-1) {
      arr2.splice(i, 1)
      continue
    }
    arr2[i] = arr2[i+1]
  }
  if (arr2[i] === "--double-prev") {
    if (i === 0) {
      arr2.splice(i, 1)
      continue
    }
    arr2[i] = arr2[i-1]
  } 
}
return arr2
}

module.exports = {
  transform
};
