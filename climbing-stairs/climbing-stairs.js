/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // return iterative(n);
    return dp(n);
};
// var iterative = function(n) {

//     if(n < 4) {
//         return n;
//     }
    
//     let current = 0;;
//     let prev1 = 2;
//     let prev2= 3;
//     let i = 4;
    
//     while(i <= n) {
//         current = prev1 + prev2;
//         prev1 = prev2;
//         prev2 = current;
//         i++;
//     }
//     return current;
// }
 var dp = function(n) {
     let dp = [];
     dp[0] = 0;
     dp[1] = 1;
     dp[2] = 2;
     
     for(let i = 3; i <= n; i ++) {
         dp[i] = dp[i - 1] + dp[i - 2];
     }
     
     return dp[n];
 }