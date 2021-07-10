/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxEndigHere = nums[0];
    let maxSofar = nums[0];
    let result = []
    
    for(let idx = 1; idx < nums.length; idx++) {
        const num = nums[idx];
        maxEndigHere = Math.max(num, maxEndigHere + num);
        result.push(maxEndigHere)
        maxSofar = Math.max(maxEndigHere, maxSofar);
    }
    return maxSofar;
};