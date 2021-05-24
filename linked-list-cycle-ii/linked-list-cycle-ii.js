/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    const nodeSeen = new Set();
    
    while(head) {
        if(nodeSeen.has(head)) {
            return head;
        }
        nodeSeen.add(head);
        head = head.next;
    }
    
    return null;
};