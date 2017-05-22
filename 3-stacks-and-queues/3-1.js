/*
3.1. Three in One
Describe how you could use a single array to implement three stacks

Two approaches:
1. Fixed division/stack size
2. Flexible size for each stack
*/

const Stack = function(singleStackSize){
  this.numberOfStacks = 3;
  this.singleStackSize = singleStackSize;
  this.size = singleStackSize * this.numberOfStacks;
  this.stackStorage = new Array(this.size);
  this.lastOccupiedStackIndices = {}
};

Stack.prototype.push = function(stackNum, value){
  if (this.isFull(stackNum)){
    return 'this stack is full!';
  } else {
    this.lastOccupiedStackIndices[stackNum] = this.lastOccupiedStackIndices[stackNum] || (stackNum - 1) * this.numberOfStacks;
    console.log(this.lastOccupiedStackIndices[stackNum]);
    this.stackStorage[this.lastOccupiedStackIndices[stackNum]] = value;
  }
}

Stack.prototype.pop = function(stackNum){
  
}

Stack.prototype.size = function(stackNum){
  
}

Stack.prototype.isFull = function(stackNum){
  console.log(this.lastOccupiedStackIndices[stackNum] < this.singleStackSize -1)
  return this.lastOccupiedStackIndices[stackNum] < this.singleStackSize -1;
}  

let testStack = new Stack(3);
// testStack.push(3, 1)
// testStack.push(3, 2)
// testStack.push(3, 3)
testStack.push(1, 1)
testStack.push(1, 2)
testStack.push(1, 3)

// console.log(testStack)