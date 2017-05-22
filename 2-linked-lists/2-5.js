/*
2.3 Sum Lists

You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse order, such that the 1's digit is a the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.

EXAMPLE
Input: 7 -> 1 -> 6, 5 -> 9 -> 2. That is 617 _ 295
Output: 2 -> 1 -> 9. That is 912.
*/

const addLinkedLists = function(list1, list2){
  let digits1 = [];
  let digits2 = [];
  let nextVal1 = list1.head;
  let nextVal2 = list2.head;
  let digitSum1 = '';
  let digitSum2 = '';
  while(nextVal1){
    digits1.push('' + nextVal1.value)
    nextVal1 = nextVal1.next; 
  }

  while(nextVal2){
    digits2.push('' + nextVal2.value)
    nextVal2 = nextVal2.next; 
  }

  for (let i = digits1.length - 1; i >= 0; i --){
    digitSum1 += digits1[i];
  }

  for (let j = digits2.length - 1; j >= 0; j --){
    digitSum2 += digits2[j];
  }

  return +digitSum1 + +digitSum2;
}
let linkedList1 = {
  _length: 6,
  head:{
    value: 7,
    next: {
      value: 1, 
      next: {
        value: 6,
        next: null
      }
    }
  }
};

let linkedList2 = {
  _length: 6,
  head:{
    value: 5,
    next: {
      value: 9,
      next: {
        value: 2,
        next: null
      }
    }
  }
};

console.log(addLinkedLists(linkedList1, linkedList2))