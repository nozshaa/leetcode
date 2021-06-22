/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums, perm=[], perms=[]) {
    if(!nums.length) {
        perms.push([...perm]);
    }
    
    for(let i = 0; i < nums.length; i++) {
        //[1,2,3] => i=0 => newnums=[2,3]
        const newNums = nums.filter((n, index) => index !== i);
        perm.push(nums[i]);
        permute(newNums, perm, perms);
        perm.pop();
    }
    
    return perms;
};