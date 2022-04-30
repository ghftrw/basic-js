const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let newString = "";
  let timesToRepeat = options["repeatTimes"] ? options["repeatTimes"] : 1;
  let timesToRepeat2 = options["additionRepeatTimes"] ? options["additionRepeatTimes"] : 1;
  let separatorStr = options["separator"] ? options["separator"] : "+";
  let separatorAdition = options["additionSeparator"] ? options["additionSeparator"] : "|";
  for (let i = 0; i < timesToRepeat; i++) {
    newString += str
    for (let j = 0; j < timesToRepeat2; j++) {
      if (!options.hasOwnProperty("addition")) {
        break
      }
      if (j === timesToRepeat2-1) {
        newString +=  options["addition"] 
        break 
      }
      newString +=  options["addition"] + separatorAdition
    }
    if (i === timesToRepeat-1) {
      break 
    }
    newString += separatorStr
  }
  return newString
}


module.exports = {
  repeater
};
