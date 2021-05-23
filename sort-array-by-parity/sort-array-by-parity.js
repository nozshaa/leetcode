/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    if(nums.length === 1) return nums;
    let lastEvenNumberFoundAt = 0;
    for(let i = 0; i < nums.length; i ++) {
        
        if(nums[lastEvenNumberFoundAt] % 2 === 0) {
            lastEvenNumberFoundAt ++;
        } else if(nums[i] % 2 === 0){
             [nums[lastEvenNumberFoundAt], nums[i]] = [nums[i], nums[lastEvenNumberFoundAt]];
            lastEvenNumberFoundAt ++;
        }
        
    }
    return nums;
};
//
var sortArrayByParity1 = function(nums) {
    if(nums.length === 1) return nums;
    let lastEvenNumberFoundAt = 0;
    for(let i = 0; i < nums.length; i ++) {
        if(nums[lastEvenNumberFoundAt] % 2 === 0) {
            console.log(lastEvenNumberFoundAt);
            lastEvenNumberFoundAt ++;
            // 
            continue;
        }
        if(nums[lastEvenNumberFoundAt] % 2 !== 0 && nums[i] % 2 === 0) {
            [nums[lastEvenNumberFoundAt], nums[i]] = [nums[i], nums[lastEvenNumberFoundAt]];
            lastEvenNumberFoundAt ++;
        }
    }
    return nums;
};