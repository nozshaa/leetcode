/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
var moveZeroes = function(nums) {
    if(nums.length === 1) return;
    
    let zeros = 0;
    const length_ = nums.length - 1;
    // pointer for process the new element
    let j = 0;
    for(let i = 0; i <= length_; i ++) {
        if(nums[i] !== 0) {
            nums[j] = nums[i];
            // console.log(j);
            j ++;
            zeros ++;
        }
    }
    for(let i = zeros; i <= length_; i++) {
        nums[i] = 0;
    }
};