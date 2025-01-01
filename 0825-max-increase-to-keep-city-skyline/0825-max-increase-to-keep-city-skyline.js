/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    let sum = 0;
    const l = grid.length;
    const res = getMaxValues(grid);

    for (let i = 0; i < l; i++) {
        for (let j = 0; j < l; j++) {
            // Use specific elements from maxInRows and maxInCols
            const minValue = Math.min(res.maxInRows[i], res.maxInCols[j]);
            sum += minValue - grid[i][j];
        }
    }
    return sum;


 function getMaxValues(matrix) {
    // Find the max value for each row
    const maxInRows = matrix.map(row => Math.max(...row));

    // Find the max value for each column
    const numCols = matrix[0].length; // Assume all rows have the same number of columns
    const maxInCols = [];
    for (let col = 0; col < numCols; col++) {
        let maxVal = Number.NEGATIVE_INFINITY;
        for (let row = 0; row < matrix.length; row++) {
            maxVal = Math.max(maxVal, matrix[row][col]);
        }
        maxInCols.push(maxVal);
    }

    return { maxInRows, maxInCols };
}
}
    