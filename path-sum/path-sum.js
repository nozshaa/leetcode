/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    return helper(root, targetSum);
};
var helper = function(root, targetSum) {
    if(!root) return false;
    targetSum = targetSum - root.val;
    if(!root.left && !root.right) {
        return (targetSum == 0);
    }
    
    return helper(root.left, targetSum)
           || helper(root.right, targetSum);
}