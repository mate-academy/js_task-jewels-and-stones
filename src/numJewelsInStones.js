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
  // write code here

  const need = jewels.replace(/[\W\d_]/g, '');
  let have = stones.replace(/[\W\d_]/g, '');

  let count = 0;

  for (let i = 0; i < need.length; i++) {
    while (have.indexOf(need[i]) + 1) {
      count += 1;

      have = have.slice(0, have.indexOf(need[i]))
        + have.slice(have.indexOf(need[i]) + 1);
    }
  }

  return count;
}

module.exports = numJewelsInStones;
