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
  let result = 0;
  const onlyLetters = stones.match(/[a-z]/gi);
  const uniqueLetters = jewels.replace(/(.)(?=.*\1)/g, '');
  if (uniqueLetters !== null && onlyLetters !== null) {
    for (let i = 0; i < uniqueLetters.length; i++) {
      for (let j = 0; j < onlyLetters.length; j++) {
        if (uniqueLetters[i] === onlyLetters[j]) {
          result++;
        }
      }
    }
  }
  return result;
}

module.exports = numJewelsInStones;
