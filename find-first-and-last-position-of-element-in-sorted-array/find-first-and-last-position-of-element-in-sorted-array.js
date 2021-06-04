/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const first=findBound(nums, target,true);
    
    if(first===-1){
        return [-1,-1];
    }
    
    const second=findBound(nums, target,false);

    return [first,second];
};
var findBound = function(nums, target, isFirst){
    let left=0;
    let right=nums.length - 1;

    
    while(left<=right){
        const mid=Math.floor((right+left)/2);
        
        if(target===nums[mid]){
            if(isFirst){
                if(mid===left || nums[mid-1]!==target){
                    return mid;
                }
                right=mid-1;
            } else{
                if(mid===right || nums[mid+1]!==target){
                    return mid;
                }
                left=mid+1;
            }
        } else if(target > nums[mid]){
            left = mid +1;
        } else{
            right=mid-1;
        }
    }
    return -1;
}
