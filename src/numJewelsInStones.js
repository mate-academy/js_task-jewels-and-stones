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
  const reg1 = new RegExp('[a-z]');
  const reg2 = new RegExp('[A-Z]');

  const jewelsDistinct = [...new Set(jewels)]
    .filter(char => reg1.test(char) || reg2.test(char));
  const stoneArray = Array.from(stones)
    .filter(char => reg1.test(char) || reg2.test(char));

  let count = 0;

  stoneArray.forEach(char => {
    jewelsDistinct.forEach(jewel => {
      if (char === jewel) {
        count++;
      }
    });
  });

  return count;
}

module.exports = numJewelsInStones;
