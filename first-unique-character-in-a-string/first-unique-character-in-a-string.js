/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const string = s;
    let countingCharacters = {};
	for(const letter of string) {
		if(!(letter in countingCharacters))
			countingCharacters[letter] = 0;
		countingCharacters[letter]++;
	}
	console.log(countingCharacters);
	for(let i = 0; i < string.length; i++) {
		const letter = string[i];
		// (letter in countingCharacters) && countingCharacters[letter] === 1
		if(countingCharacters[letter] === 1) {
			return i;
		}
	}
  return -1;
};