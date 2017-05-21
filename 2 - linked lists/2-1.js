/*
2.1 Remove Duplicates:
Write code to remove duplicates from an unsorted linked list

Follow up: Do it without any extra data structures (solution: two nested while loops to find duplicates)
*/
const deleteLinkedListDuplicates = function(node){
  let filterObject = {};
  let previousNode = null;
    console.log(node);
  while (node) {
    if (filterObject[node.value]){
      previousNode.next = node.next;
    } else {
      filterObject[node.value] = true;
      previousNode = node;
    }
    node = node.next;
  }
  return node;
}

const linkedList = {
  value: 1,
  next: {
    value: 2, 
    next: {
      value: 2,
      next:{
        value: 2, 
        next: {
          value: 5
        }
      }
    }
  }
};
console.log(deleteLinkedListDuplicates(linkedList));