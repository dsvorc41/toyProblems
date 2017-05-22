/*
Given two strings, write a method to decide if one is a permutation of the other
*/

//Time O(N) space O(1);
const checkPermutationSort = function(str1, str2){
  if (str1.length !== str2.length){
    return false;
  }
  str1 = str1.split('').sort();
  str2 = str2.split('').sort();

  for (let i = 0; i < str1.length; i ++){
    if (str1[i] !== str2[i]){
      return false;
    }
  }
  return true;
}

//Time O(N) space O(N);
const checkPermutationTable = function(str1, str2){
  let str1Table = {};
  let str2Table = {};
  if (str1.length !== str2.length){
    return false;
  }
  for (let i = 0; i < str1.length; i ++){
    str1Table[str1[i]] = str1Table[str1[i]] + 1 || 1;
    str2Table[str2[i]] = str2Table[str2[i]] + 1 || 1;
  }
  for (var key in str1Table){
    if (str1Table[key] !== str2Table[key]){
      return false;
    }
  }
  return true;
}

let str1 = '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
let str2 = '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ false';

console.log(checkPermutationSort(str1, str1));
console.log(checkPermutationSort(str1, str2));
console.log(checkPermutationTable(str1, str1));
console.log(checkPermutationTable(str1, str2));