/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    bubbleSort(nums);
    return nums;
};
var bubbleSort = function(nums) {
    let isSorted = false;
    let counter = 0;
    
    while(!isSorted) {
        isSorted = true;
        
        for(let idx = 0; idx < nums.length - counter; idx++) {
            if(nums[idx] > nums[idx+1]) {
                [nums[idx], nums[idx+1]] = [nums[idx+1], nums[idx]];
                isSorted = false;
            }
        }
        counter++;
    }
}