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
    if(root === null) 
        return false;
    
    
    ans += root.val;
    
    if(root.left === null && root.right === null) {
        if(ans === targetSum)
            return true;
        return false;
    }
    
    
    const leftSum = helper(root.left,targetSum, ans);
    const rightSum = helper(root.right,targetSum, ans);
    return leftSum || rightSum;
}