/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) { 
    
    let start = 0;
    let end = nums.length -1;
    let mid = 0;
    
    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);
        
        if (nums[start] === target) return start;
        if (nums[end] === target) return end;
        if (nums[mid] === target) return mid;
        
        if (nums[start] <= nums[mid]) {
            if (nums[start] < target && target < nums[mid]) {
                end = mid - 1;    
            } else {
                start = mid + 1;    
            }
            
        } else {
            if (nums[mid] < target && target < nums[end]) {
                start = mid + 1;  
            } else {
                end = mid - 1;
            }            
        }
        
    }
    
    return -1;
};