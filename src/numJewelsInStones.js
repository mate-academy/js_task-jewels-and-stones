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
  // Старое
  // const res = [];
  // const set = new Set();

  // for (let i = 0; i < jewels.length; i++) {
  //   if (!set.has(jewels[i])) {
  //     set.add(jewels[i]);
  //   };
  // };

  // stones.replace(/[1-9_!=+(),@#$%^&*]/gi, '').split('').map(item => {
  //   if (set.has(item)) {
  //     res.push(item);
  //   };
  // });

  // return res.length;
  // Новое
  let res = 0;
  const jews = jewels.replace(/[1-9_!=+(),@#$%^&*]/gi, '').match(/[A-Za-z]/g);

  for (const value of stones) {
    if (jewels.length > 0) {
      if (jews.includes(value)) {
        res++;
      }
    }
  }

  return res;
}

module.exports = numJewelsInStones;
