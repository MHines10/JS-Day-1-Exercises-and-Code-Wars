// JavaScript Day 1 //

// Console Text Reprsentation //
console.log("````````````````````");
console.log("Homework");
console.log("---------------------------------");

console.log("============Exercise #1 ==========");

console.log(
  "Given the array [1, 2, 3, 5, 6, 7],  finds the index of the first non-consecutive element in the array. It should log out 3 because the array at index 3 is 5 which is not consecutive."
);

console.log("---------------------------------");

console.log("let exerciseOneArr = [1, 2, 3, 5, 6, 7]");

//--------------------------------------------------------//

// Exercise 1 Solution //
let exerciseOneArr = [1, 2, 3, 5, 6, 7];

for (let i = 0; i < exerciseOneArr.length - 1; i++) {
  if (exerciseOneArr[i] + 1 !== exerciseOneArr[i + 1]) {
    console.log(i + 1);
  }
}

//--------------------------------------------------------//

console.log("============Exercise #2 ============");

console.log(
  "Given the two array of numbers below, loop through them both individually and the sum all of the positives elements."
);
console.log("---------------------------------");
// Example 1:
// Input: [10, 12, -9, 3, -1, 0, 15]
// Output: 40
// Explain: 10 + 12 + 3 + 15 = 40

// Example 2:
// Input: [3, 5, 7, 9, -10, 2, -22, -1]
// Output: 26

// Note: if there is nothing to sum, the sum is default to 0.

//--------------------------------------------------------//

// Exercise 2 Solutions //

// First Array //

console.log("let numbers1 = [10, 12, -9, 3, -1, 0, 15]");

let numbers1 = [10, 12, -9, 3, -1, 0, 15];
let sum1 = 0;

for (let i = 0; i < numbers1.length; i++) {
  if (numbers1[i] > 0) {
    sum1 += numbers1[i];
    // console.log(sum1);
  }
}
console.log(sum1);

// Second Array //

console.log("let numbers2 = [3, 5, 7, 9, -10, 2, -22, -1]");

let numbers2 = [3, 5, 7, 9, -10, 2, -22, -1];
let sum2 = 0;

for (let i = 0; i < numbers2.length; i++) {
  if (numbers2[i] > 0) {
    sum2 += numbers2[i];
    // console.log(sum2);
  }
}
console.log(sum2);

console.log("---------------------------------");
