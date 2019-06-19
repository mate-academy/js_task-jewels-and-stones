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
const numJewelsInStones = function(jewels, stones) {
  let number = 0;
  const notOurChars = '~!@#$%^&*()_+=-1234567890';
  let jewelsNoDoubles = '';
  let jewelsNoNumbers = '';

  for (let i = 0; i < jewels.length; i++) {
    if (jewels[i] !== jewels[i + 1]) {
      jewelsNoDoubles += jewels[i];
    }
  }

  for (let i = 0; i < jewelsNoDoubles.length; i++) {
    if (notOurChars.indexOf(jewelsNoDoubles[i]) === -1) {
      jewelsNoNumbers += jewelsNoDoubles[i];
    }
  }

  for (let i = 0; i < jewelsNoNumbers.length; i++) {
    for (let k = 0; k < stones.length; k++) {
      if (jewelsNoNumbers[i] === stones[k]) {
        number++;
      }
    }
  }

  return number;
};

module.exports = numJewelsInStones;
