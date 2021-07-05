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
  const jewelsList = jewels.replace(/[^a-zA-Z ]/g, '').split('');
  const filteredJewelsList = [];
  let counter = 0;
  for (let j = 0; j < jewelsList.length; j++) {
    if (!filteredJewelsList.includes(jewelsList[j])) {
      filteredJewelsList.push(jewelsList[j]);
    }
  }
  for (let i = 0; i < filteredJewelsList.length; i++) {
    for (let k = 0; k < stones.length; k++) {
      if (filteredJewelsList[i] === stones[k]) {
        counter += 1;
      }
    }
  }
  return counter;
}

module.exports = numJewelsInStones;
