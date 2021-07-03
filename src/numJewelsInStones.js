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
  const jewelsClean = jewels.replace(/[^A-Za-z]/g, '');

  if (jewelsClean === '' || stones === '') {
    return 0;
  };

  const regex = new RegExp([...jewelsClean]
    .map((item, i) => (i !== jewelsClean.length - 1) ? item + '|' : item)
    .join(''), 'g');

  return (stones.match(regex) || []).length;
}

module.exports = numJewelsInStones;
