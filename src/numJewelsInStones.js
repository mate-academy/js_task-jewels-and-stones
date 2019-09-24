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
  let count = 0;
  let unique = jewels;
  const jewelsLength = jewels.length;
  for (let i = 0; i < jewelsLength; i++) {
    for (let j = i + 1; j < jewelsLength; j++) {
      if (unique[i] === unique[j]) {
        unique = unique.replace(unique[i], '.');
      }
    }
  }

  for (let i = 0; i < jewelsLength; i++) {
    if (unique[i].match(/[A-Z]/i)) {
      for (let j = 0; j < stones.length; j++) {
        if (unique[i] === stones[j]) {
          count++;
        }
      }
    }
  }

  return count;
}

module.exports = numJewelsInStones;
