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
 * @return {number}
 */
var maxDepth = function(root) {
    let answer = 0;
//     var maxDepthTopDown = function(root, depth) {
//         // oni ke return shode bere bad
//         if(root === null) return;
//         if(root.left === null && root.right === null) {
//             answer = Math.max(answer, depth)
//         }
//         maxDepthTopDown(root.left, depth + 1);
//         maxDepthTopDown(root.right, depth + 1);
    
// }
//     maxDepthTopDown(root, 1);
    // maxDepthTopDown(root, 0, answer);
    
    // Solution: bottom-up(root)
    answer = maxDepthBottomUp(root);
    return answer;
};

var maxDepthBottomUp = function(root) {
    if(!root) return 0;
    
    let maxLeft = maxDepthBottomUp(root.left);
    let maxRight = maxDepthBottomUp(root.right);
    
    return Math.max(maxLeft, maxRight) + 1;
}
var maxDepthTopDown = function(root, d, answer) {
    if(!root) return;
    if(!root.left && !root.right) {
        answer = Math.max(answer, d);
    }    
    maxDepthTopDown(root.left, d + 1, answer);
    maxDepthTopDown(root.right, d + 1, answer);
}