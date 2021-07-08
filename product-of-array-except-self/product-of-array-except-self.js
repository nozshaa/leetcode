/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    //[2*3*4] [1*3*4] [1*2*4] [1*2*3]
    const prefix = [];
    prefix[0] = 1
    const postfix = [];
    postfix[nums.length - 1] = 1
    let first = 1;
    let last = nums.length - 2;
    while(first < nums.length && last >= 0) {
        console.log()
        prefix[first] = prefix[first - 1] * nums[first - 1] 
        first++;
        postfix[last] = postfix[last + 1] * nums[last + 1]
        last--
    }
    last = 0;
    first = 0
    const result = []
    while(first < nums.length && last < nums.length) {
        result[first] = prefix[first] * postfix[last]
        first++
        last++
    }
    console.log(prefix, postfix, result)
    return result
};