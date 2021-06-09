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
var insertIntoBST = function(root, val) {
    let currentNode = root;
    if(!currentNode) return new TreeNode(val);
    
    while(currentNode) {
        if(val > currentNode.val) {
            if(!currentNode.right) {
                console.log("f");
                currentNode.right = new TreeNode(val);
                return root;
            }
            
            currentNode = currentNode.right;
        } else {
            if(!currentNode.left) {
                currentNode.left = new TreeNode(val);
                return root;
            }
            
            currentNode = currentNode.left;
        }
    }
    
    return root;
};