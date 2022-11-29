'use strict';

// 1. countWords
function countWords(phrase) {
  // Replace this with your code
  const wordCount = {};
  
  for (const word of phrase.split(" ")) {
    if (word in wordCount) {
      wordCount[word] += 1;
    } else {
      wordCount[word] = 1;
    }
  }

  return wordCount;
}

// console.log(countWords('the quick brown fox jumps over the lazy dog'));

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  // Replace this with your code
  const melonPrice = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
  };

  if (!(price in melonPrice)) {
    return null;
  }

  return melonPrice[price].sort();
}

// console.log(getMelonsAtPrice(2.60));