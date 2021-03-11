const transpose = function(matrix) {
  // Put your solution here
  let newArray = [];
  for (let r in matrix[0]) {
    newArray.push([]);
  };
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      newArray[c][r] = matrix[r][c];
    }
  } return newArray;
};

// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write('\n');
  }
};

module.exports = transpose;