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
  let counter = 0;
  const newjewels = jewels.replace(/[^a-zA-Z]/gi, '');

  if (jewels === '' || stones === '') {
    return 0;
  }

  if (jewels.length > 50 || stones.length > 50) {
    return 0;
  }

  let str = '';

  for (let i = 0; i < jewels.length; i++) {
    if (str.includes(newjewels.charAt(i)) === false) {
      for (const letter of stones) {
        if (letter === newjewels.charAt(i)) {
          counter++;
          str = str + newjewels.charAt(i);
        }
      }
    }
  }

  return counter;
}
module.exports = numJewelsInStones;
