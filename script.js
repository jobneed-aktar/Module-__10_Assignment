/*
1.  Write a function named countVowels that takes a string and returns the number of vowels in it.
*/

let input = prompt("Enter any word or sentence : ").trim();
function countVowels(input) {
  let count = 0;
  const vowels = "aeiouAEIOU";
  for (let char of input) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels(input));



