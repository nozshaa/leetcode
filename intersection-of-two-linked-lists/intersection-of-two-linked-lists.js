/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB) return 0;
    let a = headA;
    let b = headB;
    
    while(a) {

        b = headB;
        // console.log("a: " + a.val);
        while(b) {
            
            // console.log("b: "+ b.val);
            if(b === a) {
                console.log(a)
                return a;
            }
            b = b.next;
        }
        a = a.next;
    }

    console.log('k');
    return null;
};