/*
2.6 Palindrome

Implement a function to check if a linked list is a palindrome
*/

const linkedListPalindrome = function(linkedList){
  let values = [];

  let node = linkedList;

  while (node){
    values.push(node.value);
    node = node.next;
  }

  let front = 0;
  let back = values.length - 1;
  for (front; front <= values.length / 2; front ++){
    if (values[front] !== values[back]){
      return false;
    }
    back --;
  }
  console.log(values)
  return true;
}

const palindromeList = {
  value: 'r',
  next: {
    value: 'a', 
    next: {
      value: 'c',
      next:{
        value: 'e', 
        next: {
          value: 'c',
          next: {
            value: 'a',
            next: {
              value: 'r',
              next: null
            }
          }
        }
      }
    }
  }
};

const notPalindromeList = {
  value: 'r',
  next: {
    value: 'a', 
    next: {
      value: 'c',
      next:{
        value: 'e', 
        next: {
          value: 'c',
          next: {
            value: 'a',
            next: {
              value: 'r',
              next: {
                value: 'a',
                next: null
              }
            }
          }
        }
      }
    }
  }
};

console.log(linkedListPalindrome(palindromeList));//true
console.log(linkedListPalindrome(notPalindromeList));//false