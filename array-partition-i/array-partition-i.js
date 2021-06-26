/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a,b) => a-b);
    let maxMinSum = 0;
    for(let idx = 0; idx < nums.length - 1; idx++) {
        maxMinSum += Math.min(nums[idx], nums[idx + 1]); 
        idx++;
    }
    return maxMinSum;
};