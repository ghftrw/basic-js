const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  s1 = s1.split("");
  s2 = s2.split("");
  const buffer = [];
  let counter = 0;

  s1.forEach((item) => {
    if (buffer.includes(item)) {
      return
    }
    
    buffer.push(item)
    let c1 = s1.filter(itemS1 => itemS1 === item).length
    let c2 = s2.filter(itemS2 => itemS2 === item).length

    if (c1 < c2) {
      counter += c1;
    } else {
      counter += c2;
    }
     
  })
  return counter
}

module.exports = {
  getCommonCharacterCount
};
