/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    //assume the first element in the array is minPrice
    let minPrice = prices[0];
    for(let i = 1; i < prices.length; i++) {
        const currentProfit = prices[i] - minPrice
        maxProfit = Math.max(currentProfit, maxProfit)
        minPrice = Math.min(minPrice, prices[i])
    }
    return maxProfit
};
//prices = [7,1,5,3,6,4]
//p[1]=7 day1
//p[2]=1 day2
//...
//p[5]=6