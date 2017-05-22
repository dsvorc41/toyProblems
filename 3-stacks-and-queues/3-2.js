/*
3.2 Stack Min
How would you design a stack which, in addition to push and pop, has a function 'min' which returns the minimum element? Push, pop, and min should all operate in O(1) time
*/

const Stack = function(){
  this.storage = {};
  this.size = 0;
  this.minimumElements = [];
}

Stack.prototype.push = function(value){
  this.storage[this.size++] = value;
  if (value < this.minimumElements[this.minimumElements.length - 1]) {
    this.minimumElements.push(value);
  } else if (!this.minimumElements.length) {
    this.minimumElements.push(value);
  }
}

Stack.prototype.pop = function(){
  this.size && this.size--;
  let nodeToDelete = this.storage[this.size];
  delete this.storage[this.size];
  if (nodeToDelete === this.minimumElements[this.minimumElements.length - 1]){
    this.minimumElements.pop();
  }
  return nodeToDelete;
}

Stack.prototype.min = function(){
  return this.minimumElements[this.minimumElements.length - 1];
}

let testStack = new Stack();
testStack.push(9);
testStack.push(8);
testStack.push(10);
console.log(testStack.pop() === 10);
console.log(testStack.pop() === 8);
console.log(testStack.pop() === 9);
console.log(testStack.pop() === undefined);
testStack.push(3);
testStack.push(2);
testStack.push(11);
console.log(testStack.min() === 2);
console.log(testStack.pop() === 11);
console.log(testStack.pop() === 2);
console.log(testStack.min() === 3);
console.log(testStack.pop() === 3);
console.log(testStack.pop() === undefined);


