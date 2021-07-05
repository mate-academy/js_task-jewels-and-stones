'use strict';

/**
 * You're given 2 strings:
 *  - jewels - representing the types of stones that are jewels,
 *  - stones - representing all the stones you have.
 *
 * You want to know how many of the stones you have are also jewels.
 *
 * Example 1:
 * Input: jewels = "aA", stones = "aAAbbbb"
 * Output: 3
 *
 * Example 2:
 * Input: jewels = "z", stones = "ZZ"
 * Output: 0
 *
 * Notes:
 *  - stones and jewels will contain only letters and have length at most 50.
 *  - The characters in jewels are unique.
 *  - "a" is considered a different type of stone from "A"
 *
 * @param {string} jewels
 * @param {string} stones
 *
 * @return {number}
 */
function numJewelsInStones(jewels, stones) {
  let stonesAreJewels = 0;
  const onlyLetters = stones.match(/[a-z]/gi);

  for (let stoneIndex = 0; stoneIndex < stones.length; stoneIndex++) {
    if ((jewels.indexOf(stones[stoneIndex]) !== -1
    && onlyLetters.indexOf(stones[stoneIndex]) !== -1)) {
      stonesAreJewels++;
    }
  }

  return stonesAreJewels;
}

module.exports = numJewelsInStones;
