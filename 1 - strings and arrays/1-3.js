/*
URLify: write a method to replace all spaces in a  string with ‘%20’. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given a ‘true’ length of a string. 
*/

//O(N) time O(N) space
const URLify = function(str){
  let result = '';
  //remove trailing spaces
  str = str.trim();
  for (let i = 0; i < str.length; i ++){
    if (str[i] === ' '){
      result += '%20';
    } else {
      result += str[i];
    }
  }
  return result;
};
console.log(URLify('Hello world  '))//Hello%20world
console.log(URLify('Mr John Smith Hello    '))//Mr%20John%20Smith%20Hello