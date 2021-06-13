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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const treeInfo = new TreeInfo(0,-1);
    getKthNode(root, k , treeInfo);
    return treeInfo.latestVisitedNodeValue;
};
var getKthNode = function(node, k, treeInfo) {
    if(!node || treeInfo.numberOfNodeVisited >= k) return;
    
    getKthNode(node.left, k, treeInfo);
    if(treeInfo.numberOfNodeVisited < k) {
        treeInfo.numberOfNodeVisited ++;
        treeInfo.latestVisitedNodeValue = node.val;
    }
    getKthNode(node.right, k, treeInfo);
}
class TreeInfo {
    constructor(numberOfNodeVisited, latestVisitedNodeValue) {
        this.numberOfNodeVisited = numberOfNodeVisited;
        this.latestVisitedNodeValue = latestVisitedNodeValue;
    }
}