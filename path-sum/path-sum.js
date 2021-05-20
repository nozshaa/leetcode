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
    if(!root) return false;
    
    return helper(root, targetSum, 0);
};
var helper = function(root, targetSum, ans) {
    if(!root) return false;
    
    ans += root.val;
    
    if(!root.left && !root.right) return ans === targetSum;
    
    return helper(root.left,targetSum, ans) || helper(root.right,targetSum, ans);
}

