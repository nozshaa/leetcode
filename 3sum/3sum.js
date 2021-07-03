/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a-b)
    const result = [];
    for(let i = 0; i < nums.length; i++) {
        
        let low = i + 1;
        let high = nums.length - 1;
        while(low < high) {
            const currentSum = nums[low]+nums[high]+nums[i];
            if(currentSum === 0) {
                result.push([nums[i], nums[low], nums[high]])
                while(low < high && nums[low] === nums[low+1]) {
                    low++;
                }
                low++;
                
                while(high > low && nums[high] === nums[high+1]) {
                    high--;
                }
                high--;
            } else if(currentSum < 0) {
                low++;
            } else {
                high--;
            }
        }
        
        while(i < nums.length && nums[i] === nums[i+1]) {
            i++
        }
    }
    console.log(result)
    return result;
};