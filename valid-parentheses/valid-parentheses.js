/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const closingBracket = [')', '}', ']'];
	const openingBracket = ['(', '[','{'];
	const matched = {')':'(', '}': '{', ']': '['};
    const stack = [];
    
    for(const char of s) {
        if(openingBracket.includes(char)) {
            stack.push(char);
        } else if(closingBracket.includes(char)) {
            if(!stack.length) {
                console.log('kk',char);
                return false;
            } else if(stack[stack.length - 1] !== matched[char]){
                console.log('m',char);
                
                return false
            }
            stack.pop()
        }
    }
    
    return !stack.length ? true : false;
};