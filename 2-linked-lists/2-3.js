/*
2.3 Delete Middle Node:
Implement an algorithm to delete a node in the middle (i.e. any node by the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node.

EXAMPLE
Input: node 'c' from the linked list a->b->c->d->e->f
Output: nothing is returned, but the linked list looks like a->b->->e->f
*/

const deleteNode = function(node){
  if (!n || !node.next){
    //linked list too short or null
    return false
  }

  let nextNode = node.next;
  node.value = nextNode.value;
  node.next = nextNode.next;
  return true;
}