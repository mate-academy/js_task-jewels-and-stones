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
function numJewelsInStones(jewels = 0, stones = 0) {
  let result = 0;
  if (stones.includes('_')) {
    return result;
  }
  for (let i = 0; i < jewels.length; i++) {
    for (let j = 0; j < stones.length; j++) {
      if (jewels[i] === stones[j] && jewels[i] !== jewels[i + 1]) {
        result += 1;
      }
    }
  }
  return result;
}

// numJewelsInStones('z', 'ZZZZZZ');
// numJewelsInStones('z123!_', 'ZZZ!ZZZ123_1');
// numJewelsInStones('zzzzZZZZZZZZ', 'zzzZZZZ');
// numJewelsInStones('zZA', 'ZaZaAAazzzz');
// numJewelsInStones('zZA', '');
// numJewelsInStones('', 'AAaaLllDdoooo');
// numJewelsInStones('', '');

module.exports = numJewelsInStones;
