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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const result = [];
    if(!root) return result;
    const q = [root];
    
    while(q.length > 0) {
        let levelLength = q.length;
        let level = [];
        for(let i = 0; i < levelLength; i ++) {
            const node = q.shift();
            level.push(node.val);
            if(node.left) q.push(node.left);
            if(node.right) q.push(node.right);
        }
        result.push(level);
    }
    return result;
};
var levelOrderOld = function(root) {
    //output list
    let levels = [];
    
    if(root === null) return levels;
    
    //iterate approach
    iterateLevelOrder(root, levels);
    
    //recursive approach
    // helper(root, 0);
    console.log(levels);
    return levels;
};

var iterateLevelOrder = function(root, result) {   
    if(!root) return [];
    let stack = [root];
 
    while(stack.length) {
        let level = [], len = stack.length;
        // traverse nodes in the same level
        for(let i = 0; i < len; i++) {
            let node = stack.shift();
            // visit the root
            level.push(node.val);
            console.log(level);
            // push left child to queue if it is not null
            if(node.left) stack.push(node.left);
            if(node.right) stack.push(node.right)
        }
        result.push(level);
    }
};

var helper = function(root, level) {
    if(levels.length === level) levels.push([]);
        
    levels[level].push(root.val);
    if(root.left !== null) helper(root.left, level + 1);
    if(root.right !== null) helper(root.right, level + 1);
}