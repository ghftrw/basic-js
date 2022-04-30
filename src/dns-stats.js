const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  const result = {}

  const reverseDomains = domains.map((item) => {
    return item.split(".").reverse().join(".")
  })

  reverseDomains.forEach(item => {
    const chunks = item.split(".");
    for (let i = 0; i < chunks.length; i++) {
      result[`.${chunks.slice(0, i + 1).join(".")}`] = result[`.${chunks.slice(0, i + 1).join(".")}`] + 1 || 1 
    }  
  });
  return result  
}

module.exports = {
  getDNSStats
};
