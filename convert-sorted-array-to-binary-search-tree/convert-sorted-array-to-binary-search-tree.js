/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    return constructBst(nums, 0, nums.length - 1);
};

var constructBst = function(nums, startIdx, endIdx) {
    if(startIdx > endIdx) return null;
    
    const midIdx = Math.floor((startIdx+endIdx)/2);
    const bst = new TreeNode(nums[midIdx]);
    bst.left = constructBst(nums, startIdx, midIdx - 1);
    bst.right = constructBst(nums, midIdx + 1, endIdx);
    
    return bst;
}