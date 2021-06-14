/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    return bstSearch(nums, target, 0, nums.length -1);
    
};
var bstSearch = function(nums, target, left, right) {
    const mid = Math.floor((left+right)/2);
    if(left > right) {
        return -1;
    }
    if(target === nums[mid]) {
        console.log(mid);
        return mid;
    }
    
    if(target > nums[mid]) {
        return bstSearch(nums, target, mid + 1, right);
    } else {
        return bstSearch(nums, target, left, mid - 1);
    }
}