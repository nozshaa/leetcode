/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // slow runner
    let i = 0;
    // go to loop with fast runner
    for(let j = 0; j < nums.length; j ++) {
        // skip the val
        if(nums[j] !== val) {
            nums[i] = nums[j];
            i ++;
        }
    }
    // because we first ++ and then break loop
    return i;
};