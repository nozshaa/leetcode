/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // s='babad' currentLongest = 'b', the first letter
    // s.slice(0, 1) => b
    let currentLongest = [0, 1];
    
    for(let i = 0; i < s.length; i++) {
        const odd = getLongestPalindroem(s, i - 1, i + 1);
        const even = getLongestPalindroem(s, i - 1, i);
        const longest = odd[1] -odd[0] > even[1] - even[0] ?
                        odd : even;
        currentLongest = currentLongest[1] - currentLongest[0] > longest[1] - longest[0] ? currentLongest : longest;
    }
    
    return s.slice(currentLongest[0], currentLongest[1]);
    
};
var getLongestPalindroem = function(s, leftIdx, rightIdx) {
    // if we are in the string
    while(leftIdx >= 0 && rightIdx < s.length) {
        if(s[leftIdx] === s[rightIdx]) {
            rightIdx++;
            leftIdx--;
        } else {
            break;
        }
    }
    return [leftIdx + 1, rightIdx];
}