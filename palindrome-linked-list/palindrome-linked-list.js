/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let vals = [];
    let curr = head;
    
    while(curr) {
        vals.push(curr.val);
        curr = curr.next;
    }
    
    let first = 0;
    let second = vals.length - 1;
    
    while(first < second) {
        if(vals[first] !== vals[second]) return false;
        first ++;
        second --;
    }
    return true
};