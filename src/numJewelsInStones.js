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
  let countJewels = 0;
  let repetedSysmdol = '';
  const alloweSymbols = 'AEIOUYBCDFGHJKLMNPQRSTVWXZaeiouybcdfghjklmnpqrstvwxz';

  for (const itemInJewels of jewels) {
    let possitionStart = 0;

    if (alloweSymbols.indexOf(itemInJewels) === -1
      || repetedSysmdol.includes(itemInJewels)) {
      continue;
    }

    repetedSysmdol += itemInJewels;

    while (true) {
      const possitionFound = stones.indexOf(itemInJewels, possitionStart);

      if (possitionFound === -1) {
        break;
      }
      countJewels++;
      possitionStart = possitionFound + 1;
    }
  }

  return countJewels;
}

module.exports = numJewelsInStones;
