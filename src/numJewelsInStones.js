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
  if (jewels === '') {
    return 0;
  }
  let unique = '';
  const set = new Set();
  jewels.split('').forEach(el => set.add(el));
  for (const item of set) {
    unique += item;
  }

  let count = 0;
  const pattern = /[A-Z]/ig;
  unique = unique.match(pattern);
  for (let i = 0; i < unique.length; i++) {
    count += stones.split(unique[i]).length - 1;
  }

  return count;
}

module.exports = numJewelsInStones;
