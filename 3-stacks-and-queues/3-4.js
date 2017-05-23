/*
3.4 Queue via Stacks
Implement a MyQueue class which implements a queue using two stacks
*/

const MyQueue = function(){
  this.stackNewestAtTheTop = [];
  this.stackOldestAtTheTop = [];
  this.newSize = 0
  this.oldSize = 0
}

MyQueue.prototype.enqueue = function(value){
  this.stackNewestAtTheTop[this.newSize++] = value;
}

MyQueue.prototype.dequeue = function(){
  let oldest;
  if(!this.oldSize){
    for (let i = this.newSize - 1; i >= 0; i --){
      this.stackOldestAtTheTop[this.oldSize++] = this.stackNewestAtTheTop[i];
    }
    this.stackNewestAtTheTop.length = 0;
  }
  oldest = this.stackOldestAtTheTop[this.oldSize && --this.oldSize];
  this.stackOldestAtTheTop.length && this.stackOldestAtTheTop.length --;
  return oldest;
}

let testStack = new MyQueue();
testStack.enqueue(1);
testStack.enqueue(2);
testStack.enqueue(3);
testStack.enqueue(4);
testStack.enqueue(5);
testStack.enqueue(6);
testStack.enqueue(7);
testStack.enqueue(8);
console.log(testStack.dequeue() === 1);
console.log(testStack.dequeue() === 2);
console.log(testStack.dequeue() === 3);
