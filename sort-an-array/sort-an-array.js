/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    // bubbleSort(nums);
    // insertionSort(nums);
    selectionSort(nums);
    return nums;
};
// bubble sort is better than insertion sort
// Time: O(N), Space: O(1)
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
var insertionSort = function(nums) {
    // nums: [5,2,3,1]
    // Assume sorted nums: [5] and unsorted is: [2,3,1]
    for(let i=1; i<nums.length;i++) {
        let j=i;
        //i=1, j=1 => 
        while(j>0){
            if(nums[j] < nums[j-1]) {
                [nums[j], nums[j-1]]=[nums[j-1], nums[j]];
            }
            j--;
        }
    }
}

var selectionSort = function(nums) {
    // [5,2,3,1]
    let newIndex = 0;
    
    while(newIndex < nums.length - 1) {
        let smallest = newIndex;
        for(let i = newIndex+1; i<nums.length; i++) {
            if(nums[smallest] > nums[i]) {
                smallest = i;
            }
        }
        [nums[newIndex], nums[smallest]] = [nums[smallest], nums[newIndex]];
        newIndex++;
    }
}