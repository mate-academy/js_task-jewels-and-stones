'use strict';

function numJewelsInStones(jewels, stones) {
  let letterCount = 0;

  for (const stonesLetter of stones) {
    for (const jewelsLetter of jewels) {
      if (stonesLetter === jewelsLetter) {
        letterCount++;
      }
    }
  }

  return letterCount;
}

module.exports = numJewelsInStones;
