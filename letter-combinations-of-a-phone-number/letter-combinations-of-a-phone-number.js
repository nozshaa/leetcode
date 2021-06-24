/**
 * @param {string} digits
 * @return {string[]}
 */
const DiGIT_LETTERS = {
	2: ['a', 'b', 'c'],
	3: ['d', 'e', 'f'],
	4: ['g', 'h', 'i'],
	5: ['j', 'k', 'l'],
	6: ['m', 'n', 'o'],
	7: ['p', 'q', 'r', 's'],
	8: ['t', 'u', 'v'],
	9: ['w', 'x', 'y', 'z']
};
var letterCombinations = function(digits) {
     
    const currentCombination = new Array(digits.length).fill('0');
    const combinationFounds = [];
    if(digits.length === 0) return combinationFounds;
    getCombinations(0, digits, currentCombination, combinationFounds);
    return combinationFounds;
};
function getCombinations(idx, digits, currentCombination, combinationFounds) {
    if(idx === digits.length) {
        const combination = currentCombination.join('');
        combinationFounds.push(combination);
    } else {
        const digit = digits[idx];
        //2
        const letters = DiGIT_LETTERS[digit];
        //['a', 'b', 'c']
        for(const letter of letters) {
            currentCombination[idx] = letter;
            getCombinations(idx + 1, digits, currentCombination, combinationFounds)
        }
    }
}