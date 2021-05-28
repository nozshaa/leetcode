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
var isSymmetric = function(root) {
    // return isMirror(root, root);
    let q = [];
    q.push(root);
    q.push(root);
    
    while(q.length > 0) {
        let t1 = q.pop();
        let t2 = q.pop();
        // foghesh null mizare agar ro leaf bod va q khali dar nazare
        if(!t1 && !t2) continue;
        if(!t1 || !t2) return false;
        if(t1.val !== t2.val) return false;
        
        q.push(t1.left);
        q.push(t2.right);
        q.push(t1.right);
        q.push(t2.left);
    }
    return true;
};


const isMirror = (t1, t2) => {
    // 1: ye ebtedaye barname ya vaghti resid be entehaye har barg
    if(t1 === null && t2 === null) return true;
    // agar yeki child dasht va yeki nadasht
    if(t1 === null || t2 === null) return false;
    
    return (t1.val === t2.val) 
        && isMirror(t1.right, t2.left)
        && isMirror(t1.left, t2.right);
}