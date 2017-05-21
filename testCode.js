//1.7

const rotateMatrix90degrees = function(matrix){
  let numberOfRows = matrix.length; 
  for (let i = 0; i < numberOfRows / 2; i ++){
    let first = i;
    let last = numberOfRowslet offset = i - first;
    for (let j = first; j < last; j ++){
      let offset = i - first;
      //save top
      let top = matrix[first][j];
    }
  }
}

let matrix = [
  [1,  2,  3, 4], 
  [5,  6,  7, 8], 
  [9, 10, 11, 12], 
  [13, 14, 15, 16]
];  

console.log(rotateMatrix90degrees(matrix))
// let output = [ 
//   [ 13, 9, 5, 1 ],
//   [ 14, 10, 6, 2 ],
//   [ 15, 11, 7, 3 ],
//   [ 16, 12, 8, 4 ] 
// ];