/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const seenNumbers = {};
    const result = [];
    
    for(let i = 0; i < nums.length; i++) {
        if(!(target-nums[i] in seenNumbers)) {
            
            seenNumbers[nums[i]] = i
            // console.log(seenNumbers[i])
        } else {
            return [i, seenNumbers[target-nums[i]]]
        }
    }
    console.log(seenNumbers)
};