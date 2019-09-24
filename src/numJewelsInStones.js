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
  let count = 0;

  const arrJewels = jewels.split('');

  const newJewels = arrJewels.filter(function(item, pos) {
    return arrJewels.indexOf(item) === pos;
  });

  const a = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
  const b = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  const filter = [];

  for (let i = 0; i < newJewels.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (newJewels[i] === a[j] || newJewels[i] === a[j].toLocaleLowerCase()) {
        filter.push(newJewels[i]);
      }
    }
  }

  for (let i = 0; i < newJewels.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (newJewels[i] === b[j] || newJewels[i] === b[j].toLocaleLowerCase()) {
        filter.push(newJewels[i]);
      }
    }
  }

  for (let i = 0; i < filter.length; i++) {
    for (let j = 0; j < stones.length; j++) {
      if (filter[i] === stones[j]) {
        count++;
      }
    }
  }

  return count;
}

module.exports = numJewelsInStones;
