/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    console.log(intervals)
    for(let i = 0; i < intervals.length - 1; i++) {
        console.log(intervals[i][1], intervals[i+1][0]);
        if(intervals[i][1] > intervals[i+1][0]) 
            return false;
    }
    return true;
};