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
 * @return {TreeNode}
 */

var invertTree = function(root) {
    return invert(root);
};
var invert = function(root){
    if(!root) return null;
    
    
	let right = invert(root.right);
	let left = invert(root.left);
	root.left = right;
	root.right = left;
	return root;
    
}