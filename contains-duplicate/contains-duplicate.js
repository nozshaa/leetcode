/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    //{1: 1, 2:1, 3:1}
    const seenNumbers = {}
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] in seenNumbers) {
            return true
        }
        seenNumbers[nums[i]] = 1
    }
    return false
};