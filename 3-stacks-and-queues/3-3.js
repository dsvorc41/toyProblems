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
  if (this.size){
    let last = this.storage[this.currentStack].pop();
    this.size --;
    return last;
  }
}

SetOfStacks.prototype.length = function() {
  return this.size;
}

let testStack = new SetOfStacks(3);
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
