/*
3.5 Sort Stack
Write a program to sort a stack such that the smallest items are on the top. You can use an additional temporary stack, but you may not copy the elements into any other data structure (such as an array). The stack supports the following operations: push, pop, peek, and isEmpty.
*/

const SortStack = function(){
  this.storage = [];
  this.tempStorage = [];
  this.size = 0;
}

SortStack.prototype.push = function(value){
  this.storage[this.size++] = value;
}

SortStack.prototype.pop = function(){
  this.size && this.size--;
  let lastValue = this.storage[this.size];
  this.storage.length --;
  return lastValue;
}

SortStack.prototype.peek = function(stackToCheck){
  return this[stackToCheck][0];
}

SortStack.prototype.isEmpty = function(stackToCheck){
  return this[stackToCheck].length > 0;
}

SortStack.prototype.sort = function(){
  
}

SortStack.prototype.length = function(){
  return this.size;
}

let testStack = new SortStack();
testStack.push(1);
testStack.push(2);
testStack.push(3);
testStack.push(4);
testStack.push(5);
testStack.push(6);
testStack.push(7);
testStack.push(8);

console.log(testStack.pop() === 8);
console.log(testStack.length() === 7);
console.log(testStack);