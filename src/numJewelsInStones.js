'use strict';

function numJewelsInStones(jewels, stones) {
  // write code here
  let jewelsCounter = 0;

  for (let i = 0; i < jewels.length; i++) {
    for (let j = 0; j < stones.length; j++) {
      if (jewels[i] === stones[j]) {
        jewelsCounter++;
      }
    }
  }

  return jewelsCounter;
}

module.exports = numJewelsInStones;
