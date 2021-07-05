/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    const primes = Array(n).fill(true);
    for(let i = 0; i < n; i++) {
        primes[0] = false;
        primes[1] = false;
        
        if(primes[i]) {
            for(let j = 2; i*j < n; j++) {
                primes[i*j] = false;
            }
        }
    }
    console.log(primes)
    return primes.filter(prime => prime === true).length
    
};
