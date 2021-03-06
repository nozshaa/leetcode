/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let row = 0;
    let col = matrix[0].length - 1;
    
    while(row < matrix.length && col >= 0) {
        if(matrix[row][col] > target) {
            col--;
        } else if(matrix[row][col] < target) {
            row++;
        } else {
            return true;
        }
    }
    return false
};