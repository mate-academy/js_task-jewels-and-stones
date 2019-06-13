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
  let stonesWithoutDigits = '';
  const alpabet = jewels.replace(/\s|[0-9_]|\W|[#$%^&*()]/g);

  for (let i = 0; i < alpabet.length; i++) {
    if (stonesWithoutDigits.indexOf(alpabet[i]) === -1) {
      stonesWithoutDigits += alpabet[i];
    }
  }

  for (let i = 0; i < stonesWithoutDigits.length; i++) {
    for (let j = 0; j < stones.length; j++) {
      if (stonesWithoutDigits[i] === stones[j]) {
        result++;
      }
    }
  }

  return result;
}

module.exports = numJewelsInStones;
