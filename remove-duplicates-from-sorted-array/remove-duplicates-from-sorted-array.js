/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums == null || nums.length == 0) {
      return nums;
  }
    // use two pointer i is going slower and j is going faster
    // fill and replace current array with this index
    let i = 0;
    for(let j = 1; j < nums.length; j ++) {
        if(nums[j] !== nums[i]) {
            // the first item is unique
            i ++;
            nums[i] = nums[j];
        }
    }
    // length of the array is i+1, right?
    return i + 1;
};