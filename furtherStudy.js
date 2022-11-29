'use strict';

function wordsInCommon(words1, words2) {
  // Replace this with your code
  const words1Set = new Set(words1);
  const words2Set = new Set(words2);

  const result = new Set();
  for (const word of words1Set) {
    if (words2Set.has(word)) {
      result.add(word);
    }
  }
  
  return Array.from(result);
  
}

// console.log(wordsInCommon(['a', 'b', 'c'], ['a', 'c', 'e']));


function kidsGame(names) {
  // Replace this with your code
  // Get first word and remove from consideration; add it to our output
  const output = [names.shift()];

  const firstLetterToWords = {};
  // firstLetterToWords = {
  //   b: [ 'baltoy', 'booger' ],
  //   y: [ 'yamask' ],
  //   s: [ 'starly' ],
  //   n: [ 'nosepass', 'nicky' ],
  //   k: [ 'kalob' ]
  // }

  for (const name of names) {
    if (!(name[0] in firstLetterToWords)) {
      firstLetterToWords[name[0]] = [name];
    } else {
      firstLetterToWords[name[0]].push(name);
    }
  }

 
  while (true) {
    const lastWord = output[output.length - 1];
    const startLetter = lastWord[lastWord.length - 1];
    
    if (
      firstLetterToWords[startLetter] === undefined ||
      firstLetterToWords[startLetter].length === 0
    ) {
      break;
    }

    // Get the first word with that letter and remove it
    const word = firstLetterToWords[startLetter].shift();
    output.push(word);
  }

  return output;

}

// console.log(kidsGame(["bagon", "baltoy", "yamask", "starly", "nosepass", "kalob", "nicky", "booger"]));