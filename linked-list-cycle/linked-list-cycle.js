/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // if we have one node
    // if(!head || !head.next) return false;
    
//     let slow = head;
//     let fast = head.next.next;
    
//     // fast fast.next
//     while(fast && fast.next) {
//         slow = slow.next;
//         fast = fast.next.next;
//         if(slow === fast) {
//             return true;
//         }
//     }
    // let first = head;
    // let hash = {};
    // while(first) {
    //     if(hash[first]) return true;
    //     hash[first] = true;
    //     first = first.next;
    // }
    // return false;

    return hasCycleUsingHash(head);
    
};

var hasCycleUsingHash = function(head) {
    const nodeSeen = new Set();

    while(head != null) {
        if(nodeSeen.has(head)) {
            return true;
        }
        nodeSeen.add(head);
        head = head.next;
    }
    return false;
}
