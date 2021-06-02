/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let left=1;
    let right=n;
    
    while(left<=right){
        const myGuess=Math.floor((left+right)/2);
        if(guess(myGuess)===0){
            return myGuess;
        } else if(guess(myGuess)===1){
            left=myGuess+1;
        } else{
            right=myGuess-1;
        }
    }
    return myGuess;
};