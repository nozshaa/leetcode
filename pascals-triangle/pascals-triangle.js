/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let triangle = [];
    
    triangle.push([]);
    triangle[0].push(1);
    
    for(let rowNum = 1; rowNum < numRows; rowNum ++) {
        triangle[rowNum] = [];
        triangle[rowNum].push(1);
        
        for(let j = triangle.length - 2; j > 0; j --) {
            triangle[rowNum][j] = triangle[rowNum - 1][j] + triangle[rowNum - 1][j - 1]
        }
        triangle[rowNum].push(1);
        
    }
    return triangle;
};