/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let second = n - 1;
    let first = m - 1;
    let i = n + m -1;
    
    for(let idx =i; idx >= 0; idx --) {
        if(second < 0) break;
        if(first >= 0 && nums1[first] > nums2[second]) {
            nums1[idx] = nums1[first];
            first --;
        } else {
            nums1[idx] = nums2[second];
            second --;
        }
        
    }
    
//     let p1 = m - 1;
//     let p2 = n - 1;
//     let i = m + n -1;
    
//     for(let p = i; i >= 0; p --) {
//         if(p2 < 0) break;
//         if(p1 >= 0 && nums1[p1] > nums2[p2]) {
//             nums1[p] = nums1[p1];
//             p1 --;
//         } else {
//             nums1[p] = nums2[p2];
//             p2 --;
//         }
//     }
    
    
};