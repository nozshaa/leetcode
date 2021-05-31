/**
 * @param {number} n
 * @return {number}
 */
// var fib = function(n, memo = new Map()) {
//     if (n === 0) {
//         return 0;
//     }
//     if (n === 1) {
//         return 1;
//     }
//     if (memo.has(n)) {
//         return memo.get(n);
//     }
//     let res = fib(n-1, memo) + fib(n-2, memo);
//     memo.set(n, res);
//     return res;
//     // T.C: O(N)
//     // S.C: O(N)
// };
var fib = function(n) {
    let memoize = memoizeFib();
    return memoize(n);
};
var memoizeFib = function() {
    const cache = {};
    var fibo = function(n) {
        if(n < 2) {
            return n;
        }
        const result = fibo(n - 1) + fibo(n - 2);
        cache[n] = result;
        return result;
    }
    
    return (n) => {
        if(cache[n]) {
            return cache[n];
        } else {
            const result = fibo(n);
            return result;
        }
    }
}