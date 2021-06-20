/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
	const result = new Array(nums.length).fill(-1);
    const stack = [];
    
    for(let idx = 0; idx < 2 * nums.length; idx++) {
        const circularIdx = idx % nums.length;
        
        while(stack.length && nums[circularIdx] > nums[stack[stack.length - 1]]) {
            const top = stack.pop();
            result[top] = nums[circularIdx];
        }
        stack.push(circularIdx);
    }
    return result;
};