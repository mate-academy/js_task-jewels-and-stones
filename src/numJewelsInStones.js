'use strict';

/**
 * You're given strings JEWELS representing the types of stones that are jewels,
 * and STONES representing the stones you have. Each character in STONES is
 * a type of stone you have. You want to know how many of the stones you have
 * are also jewels.
 *
 * The letters in JEWELS are guaranteed distinct, and all characters
 * in JEWELS and STONES are letters. Letters are case sensitive, so "a" is
 * considered a different type of stone from "A".
 *
 * Example 1:
 * Input: jewels = "aA", stones = "aAAbbbb"
 * Output: 3
 *
 * Example 2:
 * Input: jewels = "z", stones = "ZZ"
 * Output: 0
 *
 * Note:
 * STONES and JEWELS will consist of letters and have length at most 50.
 * The characters in JEWELS are distinct.
 *
 * @param {string} jewels
 * @param {string} stones
 *
 * @return {number}
 */
function numJewelsInStones(jewels, stones) {
  const lower = jewels.toLowerCase();
  const upper = jewels.toUpperCase();
  let result = '';
  const countStones = [];

  for (let i = 0; i < lower.length; ++i) {
    if (lower[i] !== upper[i] || lower[i].trim() === '') {
      result += jewels[i];
    }
  }

  const jewelsList = result.split('').filter((item, pos, self) => {
    return self.indexOf(item) === pos;
  });

  jewelsList.forEach(j => {
    let pos = 0;
    while (true) {
      const foundPos = stones.indexOf(j, pos);
      if (foundPos === -1) {
        break;
      }
      countStones.push(foundPos);
      pos = foundPos + 1;
    }
  });

  return countStones.length;
}
module.exports = numJewelsInStones;
