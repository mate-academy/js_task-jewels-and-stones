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

  if ((!stones
    || !jewels)
    || (testNonLetters(stones)
    || testNonLetters(jewels))) {
    return count;
  }

  const _jewels = [];

  jewels.split('').map((x) => {

    if (_jewels.indexOf(x) === -1) {
      _jewels.push(x);
    }
  }
  );

  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < _jewels.length; j++) {
      if (stones[i] === _jewels[j]) {
        count++;
      }
    }
  }

  return count;
}

function testNonLetters(str) {
  const regex = /\W+/g;

  return regex.test(str);
}

module.exports = numJewelsInStones;
