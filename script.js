/*
  1.  Write a function named countVowels that takes a string and returns the number of vowels in it.
*/

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("Your Name"));



/*
  2. Write a function named sortNumbers that takes an array of numbers and returns the array sorted in ascending order.
*/

function sortNumbers(arr) {
  return arr.sort((a, b) => a - b);
}

const result1 = sortNumbers([4, 1, 8, 3]);
console.log(result1);



/*
  3. Write a function named reverseString that takes a string and returns the reversed version of the string.
*/

function reverseString(str) {
  return str.split('').reverse().join('');
}

const result2 = reverseString("hello");
console.log(result2);



/*
  4. Write a function named getLastElement that takes an array and returns the last element.
*/

function getLastElement(arr) {
  return arr[arr.length - 1];
}

const result3 = getLastElement([10, 20, 30, 40]);
console.log(result3);

/*
  5. Write a function named mergeArrays that takes two arrays and returns a new array containing elements from both arrays.
*/

function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

const result4 = mergeArrays([1, 2], [3, 4]);
console.log(result4);


/*
  6. Write a function named hasSpace that takes a string and returns true if it contains a space character.
*/

function hasSpace(str) {
  return str.includes(' ');
}

const result5 = hasSpace("Ostad Limited");
console.log(result5);


/*
  7. Write a function named isEmptyString that takes a string and returns true if the string is empty, otherwise false.
*/

function isEmptyString(str) {
  return str === "";
}

console.log(isEmptyString(""));
console.log(isEmptyString("Hello"));

/*
  8. Write a function removeNegativeNumbers(arr) that removes all negative numbers from the array.
*/

function removeNegativeNumbers(arr) {
  return arr.filter(num => num >= 0);
}

const result6 = removeNegativeNumbers([-5, 2, -1, 6, 0]);
console.log(result6);
