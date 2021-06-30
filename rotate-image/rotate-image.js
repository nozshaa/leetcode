/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    // console.log(matrix.length - 1);
    const size = matrix.length - 1;
    for(let layer = 0; layer <= Math.floor((matrix.length)/2); layer++) {
        for(let i = layer; i < size - layer; i++) {
            const top = matrix[layer][i];
            const right = matrix[i][size - layer];
            const bottom = matrix[size-layer][size - i];
            const left = matrix[size - i][layer];
            
            matrix[layer][i] = left;
            matrix[i][size-layer] = top;
            matrix[size-layer][size - i]=right;
            matrix[size - i][layer]=bottom;
        }
    }
};