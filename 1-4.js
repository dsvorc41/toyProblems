/*
Palindrome permutation: Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words. 

Example
Input: tact coa
Output: true (Permutations: “taco cat”, “atco cta”, etc.)
*/

const palindromePermutation = function(str){
  let charCount = {};
  let oddCount = 0;
  for (let i = 0; i < str.length; i ++){
    if (str[i].match(/[a-z]/gi)){
      charCount[str[i]] = charCount[str[i]] + 1 || 1;  
    }
  }

  for (var key in charCount){
    if (charCount[key] % 2 !== 0){
      oddCount ++;
    }
  }
  return oddCount <= 1;
}
console.log(palindromePermutation('tact coa'));
console.log(palindromePermutation('tactcoapapa'));
console.log(palindromePermutation('racecar'));
console.log(palindromePermutation('racecara'));