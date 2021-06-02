/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
        // Base cases
    if(x<2) return x;
    let l=2;
    let h=Math.floor(x/2);
    
    while(l<=h){
        const m=Math.floor((l+h)/2);
        const num=m*m;
        if(num===x){
            return m;
        } else if(num<x){
            l=m+1;
        } else{
            h=m-1;
        }
    }
    return h;
};