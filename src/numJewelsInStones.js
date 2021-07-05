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
  const jewStr = jewels.replace(/[0-9&/\\#, =+()_!$~%.'":*?<>{}]/g, '');
  const stoneStr = stones.replace(/[0-9&/\\#, =+()_!$~%.'":*?<>{}]/g, '');
  const jewArray = jewStr.split('');
  const stoneArray = stoneStr.split('');

  let sum = 0;

  if (jewArray.length === 0 || stoneArray.length === 0) {
    return 0;
  } else {
    for (let i = 0; i < stoneArray.length; i++) {
      for (let j = 0; j < jewArray.length; j++) {
        if (stoneArray[i] === jewArray[j]) {
          sum++;
          break;
        }
      }
    }

    return sum;
  }
}
module.exports = numJewelsInStones;
