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
var diameterOfBinaryTree = function(root) {
    console.log(getInfo(root).diameter);
    return getInfo(root).diameter;
};
var getInfo = function(root){
    if(!root) return new TreeInfo(0,0);
    
    const leftInfo = getInfo(root.left);
    const rightInfo = getInfo(root.right);
    
    const diameter = Math.max(leftInfo.diameter , rightInfo.diameter);
    const longest = leftInfo.height + rightInfo.height;
    const currentDiameter = Math.max(diameter, longest);
    const currentHeight = Math.max(leftInfo.height, rightInfo.height) + 1;
    
    return new TreeInfo(currentDiameter, currentHeight);
}
class TreeInfo{
    constructor(diameter, height){
        this.diameter = diameter;
        this.height = height;
    }
}