/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let lowPointer = 0;
    let highPointer = numbers.length - 1;
    
    while(lowPointer <= highPointer) {
        const sum = numbers[lowPointer] + numbers[highPointer];
        if(sum === target) {
            return [lowPointer + 1, highPointer + 1]
        } else if(sum < target){
            lowPointer++;
        } else {
            highPointer--;
        }
    }
};