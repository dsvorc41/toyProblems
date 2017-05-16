/*
implement an algorithm to determine if a stirng has all unique characters. What if you cannot use additional data structures? 
*/
const createStringASCII = function(){
  let result = '';
  for (let i = 0; i <= 128; i ++){
    result += String.fromCharCode(i);
  }
  return result;
}

//O(N) time complexity O(2N) actually, and O(1) space
const uniqueCharsSort = function(str){
  str = str.split('').sort();
  for (let i = 0; i < str.length; i ++){
    if (str[i] === str[i + 1]) {
      return false;
    }
  }
  return true;
}

//O(N) time complexity, and O(N) space
const uniqueCharsTable = function(str){
  const tableOfChars = {};
  for (let i = 0; i < str.length; i ++){
    let char = str[i];
    if (tableOfChars[char]){
      return false;
    }
    tableOfChars[char] = true;
  }
  return true;
}


let allASCIIstringTrue = createStringASCII();
let allASCIIstringFalse = createStringASCII() + 'a';
console.log(uniqueCharsSort(allASCIIstringTrue));//true
console.log(uniqueCharsSort(allASCIIstringFalse));//false
console.log(uniqueCharsTable(allASCIIstringTrue));//true
console.log(uniqueCharsTable(allASCIIstringFalse));//false
