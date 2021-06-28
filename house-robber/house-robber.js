/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    //[2,7,9,3,1] 
    //[2,7,11,11,12]
    if(nums.length === 0) return 0;
    if(nums.length === 1) return nums[0];
    const maxSums = [...nums];
    const y = nums.slice();
    maxSums[1] = Math.max(maxSums[0], maxSums[1]);
    for(let i = 2; i < nums.length; i++) {
        maxSums[i] = Math.max(maxSums[i - 1], maxSums[i - 2] + nums[i]);
    }
    return maxSums[maxSums.length - 1];
};