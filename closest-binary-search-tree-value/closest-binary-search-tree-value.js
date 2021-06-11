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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    return findTheClosest(root, target, root.val);
};

var findTheClosest = function(root, target, closest) {
    // if(!root) return closest;
    
    let currentNode = root;
    while(currentNode) {
        if(Math.abs(target - closest) > Math.abs(target - currentNode.val)) {
            closest = currentNode.val;
        }
        
        if(target > currentNode.val) {
            currentNode = currentNode.right;
        } else if(target < currentNode.val) {
            currentNode = currentNode.left;
        } else {
            break;
        }
    }
    
    return closest;
}