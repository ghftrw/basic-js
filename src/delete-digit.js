const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 * 75369
 * 25573
 * 68712
 * 
 */
 function deleteDigit(n) {
  n = n.toString().split('')
  const newNumb = [];
  let toggle = true;
  for (let i = 0; i < n.length; i++) {
    if (n[i] < n[i+1] && toggle) {
      newNumb.push(n[i+1])
      i++
      toggle = false;
    } else {
      newNumb.push(n[i])
    }
  } 
  return !toggle ? +newNumb.join("") : +newNumb.slice(0, -1).join("") 
}

module.exports = {
  deleteDigit
};
