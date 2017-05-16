/*
Rotate Matrix: Given an image represented by NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
*/

const rotateMatrix90degrees = function(matrix){
  let n = matrix.length;
  for (let layer = 0; layer < n / 2; layer ++){
    let first = layer;
    let last = n - 1 - layer;
    for (let i = first; i < last; i ++){
      let offset = i - first;
      let top = matrix[first][i]//save top

      //left -> top
      matrix[first][i] = matrix[last-offset][first];

      //bottom -> left
      matrix[last-offset][first] = matrix[last][last - offset];

      //rigth -> bottom
      matrix[last][last - offset] = matrix[i][last];

      //top -> right
      matrix[i][last] = top; //right <- saved top
    }
  }
  return matrix;
}


let matrix = [
  [1,  2,  3, 4], 
  [5,  6,  7, 8], 
  [9, 10, 11, 12], 
  [13, 14, 15, 16]
];  

console.log(rotateMatrix(matrix))
// let output = [ 
//   [ 13, 9, 5, 1 ],
//   [ 14, 10, 6, 2 ],
//   [ 15, 11, 7, 3 ],
//   [ 16, 12, 8, 4 ] 
// ];
