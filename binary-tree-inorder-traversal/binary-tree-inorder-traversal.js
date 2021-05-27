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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    
    const res = [];
    recursiveInorder(root,res);
    // inorderIteration(root, res);
    return res;

}

function inorderIteration(root, res) {
    
    if(root === null) return;
    const stk = [];
    
    while(stk.length > 0 || root !== null) {
        if(root) {
            stk.push(root);
            root = root.left;
        } else {
            root = stk.pop();
            res.push(root.val);
            root = root.right;
        }
    }

}


function recursiveInorder(root, res) {
    helper(root, res);
}
function helper(node, res) {
    
    if(!node) return;
    
    if(node.left) helper(node.left, res);
    
    res.push(node.val);
    
    if(node.right) helper(node.right, res);
}
