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
  let jewelStonesCounter = 0;

  // проверяем строки на наличие символов
  if (jewels.length === 0 || stones.length === 0) {
    return 0;
  }

  // удаляем из строк все символы, кроме букв
  const jewelsLetters = jewels.replace(/[^a-zA-Z ]/g, '');
  const stonesLetters = stones.replace(/[^a-zA-Z ]/g, '');

  // проверяем на совпадение символов и считаем количество совпадений
  for (let i = 0; i < stonesLetters.length; i++) {
    if (jewelsLetters.includes(stonesLetters[i])) {
      jewelStonesCounter++;
    }
  }

  return jewelStonesCounter;
}

module.exports = numJewelsInStones;
