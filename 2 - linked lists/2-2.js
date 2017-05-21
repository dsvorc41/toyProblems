/*
2.2. Return Kth to last:
Implement an algorhitm to find the kth to last element of a singly linked list

Solution 1: iterative with O(2N) time. Iterate through linked list once and find its length. Then iterate again and stop when you reach the Kth element from the end

Solution 2: OPTIMAL - iterative with O(N) time and O(1) space. Set two pointers, one at begining, one at Kth element and move them together. When the second pointer reaches the end, you know the first one is at your target element, Kth from the end. 
*/

const returnKthToLastOPTIMAL = function(node, k){
  let p1 = node;
  let p2 = node;

  //move p2 k nodes into the list
  for (let i = 0; i < k; i ++){
    //if p2 is null before it reaches k, return null since the linked list is shorter than target k elemens
    if (!p2){
      return null
    }
    p2 = p2.next;
  }

  //move p1 and p2 at the same pace. When p2 reaches the end p1 will be at the right element
  while(p2){
    p1 = p1.next;
    p2 = p2.next;
  }
  return p1.value;
}

const linkedList = {
  value: 1,
  next: {
    value: 2, 
    next: {
      value: 3,
      next:{
        value: 4, 
        next: {
          value: 5,
          next: {
            value: 6,
            next: {
              value: 7,
              next: {
                value: 8,
                next: {
                  value: 9,
                  next: {
                    value: 10,
                    next: null
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

console.log(returnKthToLastOPTIMAL(linkedList, 2));//9