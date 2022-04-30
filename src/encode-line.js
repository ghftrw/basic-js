const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

 function encodeLine(str) {
  let splitedStr = str.split("");
  let newStr = "";
  let count = 1;
  for (let i = 0; i < splitedStr.length; i++) {
    if (splitedStr[i] === splitedStr[i+1]) {
      count++
      continue
    }
    if ( count === 1) {
      newStr += splitedStr[i];
      continue
    }
      newStr += count + splitedStr[i];
      count = 1;  
  }
  return newStr 
}

module.exports = {
  encodeLine
};
