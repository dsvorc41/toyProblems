/*
String Compression: Implement a method to perform a basic string compression using the counts of repeated characters. For example, the string “aabcccccaaa” should become “a2b1c5a3”. If the “compressed” string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a-z).
*/

const compressString = function(str){
  let result = '';
  let count = 1;
  let currentChar = str[0];
  for (let i = 1; i <= str.length; i ++){
    if (str[i] === currentChar){
      count ++;
    } else {
      result += currentChar + count;
      currentChar = str[i];
      count = 1;
    }
  }
  return result;
}

console.log(compressString('aabcccccaaa'));//'a2b1c5a3'