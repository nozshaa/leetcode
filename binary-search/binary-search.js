/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    return searchI(nums, target);
};
var searchI = function(nums, target) {
    let l = 0;
    let h = nums.length - 1;
    
    while(l<=h){
        
        const mid = Math.floor((l + h) /2);
        const num = nums[mid]
        
        if(target===num){
            return mid;
        } else if(target<num){
            h=mid-1;
        } else{
            l=mid+1;
        }
    }
    
    return -1;
}