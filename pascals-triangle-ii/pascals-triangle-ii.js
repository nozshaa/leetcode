/**
 * @param {number} rowIndex
 * @return {number[]}
 */

const cache = new Map();

var getRow = function(rowIndex) {
    let ans = [];
    
    for(let i = 0; i <= rowIndex; i ++) {
        ans.push(getNum(rowIndex, i));
    }
    return ans;
};
var getNum = function(row, col) {
    // firsrt column and last column is 1
    // 1(row0) 11(row1) 121(row2) 1221(row3) 13431
    // so always column[row][0] = 1 and row 3 in column 3 is 1 
    if(row === 0 || col === 0 || row === col) {
        return 1;
    }
    
    const hashKey = row + "," + col;
    
    if (cache.has(hashKey)) {
        return cache.get(hashKey);
    }
    
    // return getNum(row - 1, col - 1) + getNum(row - 1, col);
    const value = getNum(row - 1, col - 1) + getNum(row - 1, col);
    cache.set(hashKey, value);
    return value;
}