/*
Zero Matrix
Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0;
*/

const setZeros = function(matrix){
  let rows = new Array(matrix[0].length)
  let columns = new Array(matrix[1].length)

  //store the row and column index with value 0;
  for (let i = 0; i < matrix.length; i ++){
  	for (let j = 0; j < matrix[0].length; j ++){
      if (matrix[i][j] === 0) {
        rows[i] = true;
        columns[j] = true;
      }
  	}
  } 

  //Nullify rows
  for (let i = 0; i < rows.length; i ++){
    if (rows[i]) nullifyRow(matrix, i);
  }

  //Nullify columns
  for (let j = 0; j < columns.length; j ++){
    if (columns[j]) nullifyColumn(matrix, j);
  }


  function nullifyRow(matrix, row) {
    for (let i = 0; i < matrix[0].length; i ++){
      matrix[row][i] = 0;
    }
  }  

  function nullifyColumn(matrix, col) {
    for (let i = 0; i < matrix.length; i ++){
      matrix[i][col] = 0;
    }
  }
  return matrix;
}


let matrix = [
  [1, 2, 3, 4, 5, 0, 6, 7],
  [1, 2, 3, 4, 5, 9, 6, 10],
  [1, 2, 3, 4, 0, 1, 6, 7],
  [1, 2, 9, 4, 5, 2, 6, 7],
  [1, 2, 3, 4, 5, 4, 6, 7],
  [1, 2, 3, 4, 5, 5, 0, 7],
  [1, 0, 3, 4, 5, 8, 6, 7],
]

console.log(setZeros(matrix));