const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 function renameFiles(names) {
  let counter = 1;
  const result = [];
  const mapNames = names.map((item) => {
    if(item[item.length-1] === ")") {
      return item + "|"
    }
    return item
  })
  for (let i = 0; i < mapNames.length; i++) {
    if (!result.includes(mapNames[i])) {
      if (mapNames[i][mapNames[i].length-1] === "|" && result.includes(mapNames[i].split("").filter((x) => x != "|").join(""))) {
        result.push(mapNames[i] + "(" + counter + ")")
        continue
      }
      result.push(mapNames[i])
    } else {
      let copyCheck = mapNames[i] + "(" + counter + ")";
      while (result.includes(copyCheck)) {
        counter++
        copyCheck = mapNames[i] + "(" + counter + ")";
      }
      counter = 1;
      result.push(copyCheck)
    }
  }
  return result.map((item) => {
    if (item.includes("|")) {
     return item.split("").filter((x) => x != "|").join("")
    }
    return item
  })
}

module.exports = {
  renameFiles
};
