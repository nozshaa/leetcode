/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseListold = function(head) {
    let curr = head;
    // 1->2->3->4->5->null 
    // 1->null   2->3->4->5->null
    // 2->1->null  3->4->5->null
    // 3->2->1->null 4->5->null
    // 4->3->2->1->null 5->null
    // 5->4->3->2->1->null
    let prev = null;
    while(curr) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev;
};
var reverseList = function(head) {
    if(!head) return null;
    
    let prev = null;
    let curr = head;
    
    while(curr) {
        const temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev;
}