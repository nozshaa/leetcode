/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let sortedArr = arr.sort((a,b) => {
        return Math.abs(a-x)-Math.abs(b-x);
    });
    sortedArr = sortedArr.splice(0,k);
    return sortedArr.sort((a,b) => a-b);
    console.log(sortedArr);
};