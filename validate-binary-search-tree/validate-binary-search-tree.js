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
 * @return {boolean}
 */
// var isValidBST = function(root) {
//     return helper2(root, null, null);
// };
var isValidBST = function(root, min = -Infinity, max = Infinity) {
    if(root === null)
        return true;
    if(root.val <= min || root.val >= max)
        return false;
    return isValidBST(root.right, root.val, max) && isValidBST(root.left, min, root.val)
};
var helper = function(root, low, high) {
    // 1-null-null is a valid BST
    if(!root) return true;
    
    if((low && root.val <= low) || (high && root.val >= high)) {
        return false;
    }
    
    // if both return true is valid BST
    return helper(root.right, root.val, high) &&
           helper(root.left, low, root.val);
}