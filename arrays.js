'use strict';

// 1. printIndices
function printIndices(items) {
  // Replace this with your code
  for (const i in items) {
    console.log(i, items[i]);
  }
}

// printIndices(["apple", "berry", "cherry"])

// 2. everyOtherItem
function everyOtherItem(items) {
  // Replace this with your code
  const result = [];

  for (const i in items) {
      if (i % 2 == 0) {
        result.push(items[i]);
      }
    }

  return result;
}

// console.log(everyOtherItem(["apple", "berry", "cherry", "car", "horse"]))

// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code
  // nums = [2, 5, 3, 7, 8, 4]
  // return array[2, 3, 4]

  const sortedItems = items.sort();
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push(sortedItems[i]);
  }
  
  return result;
}

// console.log(smallestNItems([2, 5, 3, 7, 8, 4], 3))