/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    reverseStringHelper(s, s.length - 1, 0);
    console.log(s);
};
var reverseStringHelper = function(s, index, first) {
    // console.log(index + "Firsi: " + first);
    if(!s || index <= first) {
        return;
    }
    
    [s[index], s[first]] =[s[first] , s[index]];
    
    reverseStringHelper(s, index - 1 , first + 1);
}