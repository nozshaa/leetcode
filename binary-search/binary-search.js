/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    return bstSearch(nums, target, 0, nums.length -1);
    
};
var bstSearch = function(nums, target, left, right) {
    if(left > right) {
        return -1;
    }
    
    const mid = Math.floor((left+right)/2);
    if(target === nums[mid]) {
        return mid;
    }
    
    return target > nums[mid] ? 
            bstSearch(nums, target, mid + 1, right) : 
            bstSearch(nums, target, left, mid - 1);
}