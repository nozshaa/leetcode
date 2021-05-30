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
var reverseListIterative = function(head) {
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
    
    var reverseRecursion = function(p) {
        // Exit condition
        if(!p || !p.next) {
            head = p;
            return head;
        }
        reverseRecursion(p.next);
        let q = p.next;
        q.next = p;
        p.next = null;
        return head;
    }
    return reverseRecursion(head);

}
