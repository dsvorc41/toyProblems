/*
3.3 Stack of Plates

Image a (literal) stack of plates. If the stack gets too high, it might topple. Therefore in real life, we would likely start a new stack when the previous stack exceeds some threshold. Implement a data structure 'SetOfStacks' that mimics this. SetOfStacks should be composed of several stacks and should create a new stack once the previous one exceeds capacity. SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single stack (that is, pop() should return the same values as it would if there were just a single stack).

*/

const SetOfStacks = function(stackCapacity){
  this.stackCapacity = stackCapacity;
  this.size = 0;
  this.currentStack = 0;
  this.storage = {0: []};
}

SetOfStacks.prototype.push = function(value) {
  if (this.storage[this.currentStack].length < this.stackCapacity) {
    this.storage[this.currentStack].push(value);
    this.size ++;
  } else {
    this.currentStack ++;
    this.storage[this.currentStack] = [];
    this.push(value);
  }
}

SetOfStacks.prototype.pop = function() {
  
}

SetOfStacks.prototype.size = function() {
  
}

let testStack = new SetOfStacks(3);
testStack.push(9);
testStack.push(8);
testStack.push(10);
testStack.push(9);

console.log(testStack);
// console.log(testStack.pop() === 8);
// console.log(testStack.pop() === 9);
// console.log(testStack.pop() === undefined);
// testStack.push(3);
// testStack.push(2);
// testStack.push(11);
// console.log(testStack.min() === 2);
// console.log(testStack.pop() === 11);
// console.log(testStack.pop() === 2);
// console.log(testStack.min() === 3);
// console.log(testStack.pop() === 3);
// console.log(testStack.pop() === undefined);