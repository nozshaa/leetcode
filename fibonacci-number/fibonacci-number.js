/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
   	if(n < 2) return n;
	
	const x = fib(n - 2);
	const y = fib(n-1);
	const z = x+y;
	console.log(x, y)
	return x+y;
};