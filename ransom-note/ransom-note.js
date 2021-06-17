/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const hash ={};
    for(const letter of magazine){
        if(!(letter in hash))
            hash[letter] = 0;
        hash[letter]++;
    }
    
    for(const letter of ransomNote) {
        if(!(letter in hash) || hash[letter] === 0) {
            return false;
        }
        hash[letter]--;
    }
    
    return true;
};