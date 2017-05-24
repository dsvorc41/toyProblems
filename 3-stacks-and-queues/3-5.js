/*
3.5 Sort Stack
Write a program to sort a stack such that the smallest items are on the top. You can use an additional temporary stack, but you may not copy the elements into any other data structure (such as an array). The stack supports the following operations: push, pop, peek, and isEmpty.
*/

const SortStack = function(){
  this.storage = [];
}

SortStack.prototype.push = function(value){
  this.storage.push(value);
}

SortStack.prototype.pop = function(){
  return this.storage.pop();
}

SortStack.prototype.peek = function(stackToCheck){
  stackToCheck = stackToCheck ? stackToCheck : this.storage;
  return stackToCheck[0];
}

SortStack.prototype.isEmpty = function(stackToCheck){
  stackToCheck = stackToCheck ? stackToCheck : this.storage;
  return stackToCheck.length <= 0;
}

SortStack.prototype.sort = function(){
  

}

SortStack.prototype.length = function(){
  return this.storage.length;
}

let testStack = new SortStack();
testStack.push(4);
testStack.push(2);
testStack.push(3);
testStack.push(1);
testStack.push(10);
testStack.push(8);
// testStack.pop();
testStack.sort();

// console.log(testStack.length() === 7);
console.log(testStack);