/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 const cache = {};
const fastPow = (x, n) => {
    if (n == 0) {
        return 1;
    }
    const number = Math.floor(n/2);
    const half = fastPow(x, number);
    if (n % 2 == 0) {
        return half * half;
    } else {
        return half * half * x;
    }
}
 var myPow = function(x, n) {
     if (n < 0) {
         x = 1/x;
         n = -n;
     }
     return fastPow(x, n);
 };
 