/*
One Away: there are three types of edits that can be performed on strings - insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one (or zero) edits away.

Example:
oneAway('pale’,’ple’)//true
oneAway('pales’,’pale’)//true
oneAway('pale’,’bale’)//true
oneAway('pale’,’bae’)//true
*/

const oneAway = function(str1, str2){

  const findDiff = function(str1, str2){
    let diffCount = 0;
    let str1chars = {};
    let str2chars = {};
    for (let i = 0; i < str1.length; i ++) {
      str1chars[str1[i]] = str1chars[str1[i]] + 1 || 1;
      str2chars[str2[i]] = str2chars[str2[i]] + 1 || 1;
    }

    for (let key in str1chars){
      if (str1chars[key] !== str2chars[key] || !str2chars.hasOwnProperty(key)){
        diffCount ++;
      }
    }
    return diffCount <= 1;
  }


  if (str1.length === str2.length){
    return findDiff(str1, str2);
  } else if (str1.length + 1 === str2.length) {
    return findDiff(str1, str2);
  } else if (str2.length + 1 === str1.length) {
    return findDiff(str2, str1);
  } else {
    return false;
  }
}

console.log(oneAway('pale','ple'));//true
console.log(oneAway('pales','pale'));//true
console.log(oneAway('pale','bale'));//true
console.log(oneAway('pale','bae'));//false