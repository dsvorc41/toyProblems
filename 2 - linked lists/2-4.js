/*
2.4 Partition

Write code to partition a linked list around a value 'x' such that all nodes less than 'x' come before all nodes greater than or equal to 'x'. if 'x' is contained within the list, the values of 'x' only need to be after the elements less than 'x' (see below). The partition element 'x' can appear anywhere in the 'right partition'; it does not need to appear between the left and right partitions.

EXAMPLE
Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 (x = 5)
Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
*/

const linkedListPartition = function(node, x){
  let head = node;
  let tail = node;

  while (node){
    let next = node.next;
    if (node.value < x){
      node.next = head;
      head = node;
    } else {
      tail.next = node;
      tail = node;
    }
    node = next;
  }
  tail.next = null
  return JSON.stringify(head);
}

const linkedList = {
  value: 3,
  next: {
    value: 5, 
    next: {
      value: 8,
      next:{
        value: 5, 
        next: {
          value: 10,
          next: {
            value: 2,
            next: null
          }
        }
      }
    }
  }
};

console.log(linkedListPartition(linkedList, 5))