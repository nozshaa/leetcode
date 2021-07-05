/**
 * @param {number} n
 * @return {number}
 */



const countPrimes = (n) => {
  if (n <= 1) {
    return []
  }

  const output = [];
  //Declare a Boolean Array for storing if a number is prime or not
  const isPrime = Array(n).fill(false)

  // Initialise every element of this array as true
  for (let i = 0; i < n; i++) {
    isPrime[i] = true;
  }
  
  // Since 0 and 1 are not prime we declare them false explicitly
  isPrime[0] = false;
  isPrime[1] = false;

  for (let i = 0; i < n; i++) {
    // Only check if isPrime[i]==true
    if (isPrime[i]) {
       // Mark all the factor of (i) as Not Prime
      for (let j = i + i; j < n; j += i) {
        isPrime[j] = false;
      }
      //Accumulating all the prime numbers in out ans list
      output.push(i);
    }
  }

  return output.length;
}
