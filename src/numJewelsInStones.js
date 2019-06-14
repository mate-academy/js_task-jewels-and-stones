'use strict';

/*
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
  const jList = jewels.replace(/[,.;:~!?@#$%^&*()_+=\\[\]{}|/\d]/g, '');
  const allLength = stones.length;

  const regExp = `[${jList}]`;
  const findExp = new RegExp(regExp, 'g');

  const stonesLength = stones.replace(findExp, '').length;

  return allLength - stonesLength;
}

/* Another wersion of that function.
  Just uncomments this optional function and comment one above. */

/*
function numJewelsInStones(jewels, stones) {
  let count = 0;
  const jLength = jewels.length;
  let jList = jewels.replace(/[,.;:~!?@#$%^&*()_+=\\[\]{}|/\d]/g, '');
  let myStones = stones;
  let myJewels = '';

  for (let i = 0; i < jLength; i++) {
    while (myStones.indexOf(jList[i]) >= 0) {
      count++;

      // JUST 4 FUN Creating a list of jewels.
      // May be returned with a function return.
      myJewels = myJewels + myStones[myStones.indexOf(jList[i])];

      // Taking away jewels, so we have only stones left.
      // May be returned with a function return.
      myStones = myStones.replace(myStones[myStones.indexOf(jList[i])], '');
    }
  }

  return count;
}
*/

module.exports = numJewelsInStones;
