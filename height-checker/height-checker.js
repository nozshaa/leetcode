/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    //[5,1,2,3,4] 
    //[1,2,3,4,5]
    //5
    //[1,1,4,2,1,3]
    //[1,1,1,2,3,4]
    //3
    let notMatchedCount = 0;
    let expected = [...heights];
    expected.sort((a,b) => a-b);
    console.log(expected, heights)
    for(let idx = 0; idx < heights.length; idx++) {
        if(heights[idx] !== expected[idx])
            notMatchedCount++;
    }
    return notMatchedCount;
};