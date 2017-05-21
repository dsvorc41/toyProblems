/*
2.8 Loop detection

Given a circular linked list, implement an algorithm that returns the node at the beginning of the loop

DEFINITION
Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node so as to make a loop in the linked list

EXAMPLE
Input  A -> B -> C -> D -> E -> C (same C as earlier)
Output C
*/

const detectLoop = function(linkedList){
  let headNode = linkedList;
  let slowPointer = headNode;
  let fastPointer = headNode;
  let collisionPoint = null

  while (fastPointer){
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
    if (slowPointer === fastPointer){
      collisionPoint = slowPointer;
      break;
    }
  }

  while (headNode){
    headNode = headNode.next;
    collisionPoint = collisionPoint.next;
    if (headNode === collisionPoint) {
      return headNode.value;
    }
  }
  return null;
}

//create individual nodes of a linked list
const nodeA = {
  value: 'A', 
  next: null
};
const nodeB = {
  value: 'B', 
  next: null
};
const nodeC = {
  value: 'C', 
  next: null
};
const nodeD = {
  value: 'D', 
  next: null
};
let nodeE = {
  value: 'E', 
  next: null
};
//connect the nodes into a linked list and create a loop after all nodes have been defined
nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;
nodeD.next = nodeE;
nodeE.next = nodeC;
const linkedList = nodeA;
console.log(detectLoop(linkedList));