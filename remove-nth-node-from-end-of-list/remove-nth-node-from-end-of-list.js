/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode();
    dummy.next = head;
    let first = dummy;
    let second = dummy;
    let count = 0;
    
    while(count <= n) {
        first = first.next;
        count ++;
    }
    
    while(first) {
        first = first.next;
        second = second.next;
    }
    second.next = second.next.next;
    return dummy.next;
};
var removeNthFromEnd1 = function(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let l = 0;
    let first = head;
    
    while(first) {
        first = first.next;
        l ++;
    }
    
    l = l - n;
    first = dummy;
    console.log(l);
    while(l > 0) {
        l --;
        first = first.next;
        console.log(first.val);
    }
    first.next = first.next.next;
    console.log("head: " + head.val);
    return dummy.next;
};