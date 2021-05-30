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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    if(!root) return null;
    return searchInBst(root, val);
};
var searchInBst = function(root, val) {
    if(!root) {
        return null;
    }
    
    if(root.val > val) {
        return searchInBst(root.left, val);
    } else if(root.val < val) {
        return searchInBst(root.right, val);
    }else {
        // console.log(root.val);
        return root;
    }
}