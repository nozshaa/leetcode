/**
 * @param {number} n
 * @return {number}
 */
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
        const p1 = fibo(n - 1);
        cache[n - 1] = p1;
        const p2 = fibo(n - 2);
        cache[n - 2] = p2;
        cache[n] = p1 + p2;
        return p1 + p2;
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