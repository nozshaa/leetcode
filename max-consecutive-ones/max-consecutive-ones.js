/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let pointer = 0
    let sum = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 1) pointer ++;
        else {
            sum = Math.max(pointer, sum);
            pointer = 0;
        }
    }
    return Math.max(pointer, sum);
};
