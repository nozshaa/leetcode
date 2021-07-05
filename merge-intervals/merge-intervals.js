/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
let start = 0, end = 1;
var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0])
    // console.log(intervals)
    const result = []
    for(let i = 0; i < intervals.length; i++) {
        
        if(result.length == 0 || result[result.length - 1][1] < intervals[i][0]) {
            result.push(intervals[i])
        } else {
            result[result.length - 1][1] = Math.max(result[result.length - 1][1], intervals[i][1])
            // console.log(result[result.length - 1][1])
            // console.log(Math.max(result[result.length - 1][1], intervals[i][1]))
        }
        // console.log(intervals[i])
    }
    
    // console.log(result[result.length-1][1])
    // console.log(result)
    return result
};