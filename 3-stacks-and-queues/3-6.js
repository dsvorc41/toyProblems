/*
3.6 Animal Shelter
An animal shelter, which holds only dogs and cats, operates on strictly "first in, first out" basis. People must adopt either the 'oldest' (based on arrival time) of all animals at the shelter, or they can select whether they would prefer a dog or a cat (and will receive the oldest animal of that type). They cannot select which specific animal they would like. Create the data structures to maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog, and dequeueCat. You may used the built in LinkedList data structure.
*/

const AnimalShelter = function() {
  this.cats = {};
  this.dogs = {};
  this.time = 0;
}
AnimalShelter.prototype.enqueue = function(animalType, animalName){
  animalType += 's';
  this[animalType][this.time++] = animalName;
};
AnimalShelter.prototype.dequeueAny = function(){
  let oldestCatName, 
  oldestCatTime, 
  oldestDogName, 
  oldestDogTime,
  animalToDequeue;

  for (let key in this.cats){
    oldestCatTime = +key;
    oldestCatName = this.cats[key];
    break;
  }
  for (let key in this.dogs){
    oldestDogTime = +key;
    oldestDogName = this.dogs[key];
    break;
  }

  if (oldestDogTime < oldestCatTime) {
    animalToDequeue = oldestDogName;
    delete this.dogs[oldestDogTime];
  } else {
    animalToDequeue = oldestCatName;
    delete this.cats[oldestCatTime];
  }

  return animalToDequeue;
};
AnimalShelter.prototype.dequeueDog = function(){
  for (let key in this.dogs){
    let animalToDequeue = this.dogs[key];
    delete this.dogs[key];
    return animalToDequeue;
  }
};
AnimalShelter.prototype.dequeueCat = function(){
  for (let key in this.cats){
    let animalToDequeue = this.cats[key];
    delete this.cats[key];
    return animalToDequeue;
  }
};

let testShelter = new AnimalShelter();
testShelter.enqueue('dog', 'Spot');
testShelter.enqueue('dog', 'Fiffy');
testShelter.enqueue('cat', 'Scar');
testShelter.enqueue('dog', 'Beethoven');
testShelter.enqueue('cat', 'Simba');
testShelter.enqueue('cat', 'Mufasa');
console.log(testShelter.dequeueAny() === 'Spot');
console.log(testShelter.dequeueAny() === 'Fiffy');
console.log(testShelter.dequeueAny() === 'Scar');
testShelter.enqueue('dog', 'Gonzo');
console.log(testShelter.dequeueCat() === 'Simba');
console.log(testShelter.dequeueCat() === 'Mufasa');
testShelter.enqueue('cat', 'Fluffy');
console.log(testShelter.dequeueDog() === 'Beethoven');

console.log(testShelter);