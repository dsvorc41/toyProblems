/*
2.7 Intersection
Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting node. Note that the intersection is defined based on reference (must be same object in memory with strict equality, i.e. ===), not value. That is, if the kth node of the first linked list is the exact same node (by reference) as the jth node of the second linked list, then they are intersecting.
*/

const findIntersection = function(list1, list2){
  //1. Run through each list to get the lengths, and the tails
  let list1Specs = getLengthAndTail(list1);
  let list2Specs = getLengthAndTail(list2);

  //2. Compare the tails, if they are different (by reference, not value) return false. There's no intersection.
  if (list1Specs.tail !== list2Specs.tail) {
    return false;
  }

  //3. Set two pointers to the start of each list
  let longerList;
  let shorterList;
  if (list1Specs.length >= list2Specs.length){
    longerList = list1;
    shorterList = list2;
  } else {
    longerList = list2;
    shorterList = list1;
  }

  //4. On the longer linked list, advance its pointer by the difference in lengths
  let lengthsDiff = Math.abs(list1Specs.length - list2Specs.length);
  let counter = 0;
  while (counter < lengthsDiff){
    longerList = longerList.next;
    counter ++;
  }

  //5. Now traverse on each linked list until the pointers are the same
  while (longerList){
    if (longerList === shorterList) {
      console.log(longerList, shorterList);
      return true;
    }
    longerList = longerList.next;
    shorterList = shorterList.next;
  }
  return false;

  //helper function for lengths and tails
  function getLengthAndTail(list){
    let length = 0;
    let tail = {};
    while (list){
      list = list.next;
      length ++;
      tail = list;
    }
    return {length, tail};
  }
}
const sharedList = {
  value: 7,
  next: {
    value: 2, 
    next: {
      value: 1,
      next: null
    }
  }
}
const linkedList1 = {
  value: 3,
  next: {
    value: 1, 
    next: {
      value: 5,
      next:{
        value: 9, 
        next: sharedList
      }
    }
  }
};
const linkedList2 = {
  value: 4,
  next: {
    value: 6, 
    next: sharedList
  }
};
const linkedList3 = {
  value: 3,
  next: {
    value: 1, 
    next: {
      value: 5,
      next:{
        value: 9, 
        next: {
          value: 7,
          next: {
            value: 2, 
            next: {
              value: 1,
              next: null
            }
          }
        }
      }
    }
  }
};

console.log(findIntersection(linkedList1, linkedList2));//true
console.log(findIntersection(linkedList1, linkedList3));//false