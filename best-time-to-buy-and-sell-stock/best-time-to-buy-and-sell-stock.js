/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit1 = function(prices) {
    let maxProfit = 0;
    
    let low = 0;
    let high = prices.length - 1;
    for(let i = 0; i < prices.length; i++) {
        for(let j = i + 1; j < prices.length; j++) {
            const currentProfit = prices[j] - prices[i]
            if(currentProfit > maxProfit) maxProfit = currentProfit
        }
    }
    return maxProfit
};
var maxProfit = function(prices) {
    let maxProfit = 0;
    let minPrice = prices[0];
    for(let i = 1; i < prices.length; i++) {
        const currentProfit = prices[i] - minPrice
        if(currentProfit > maxProfit) {
            maxProfit = currentProfit
        }
        if(prices[i] < minPrice) minPrice = prices[i]
    }
    return maxProfit
};
//prices = [7,1,5,3,6,4]
//p[1]=7 day1
//p[2]=1 day2
//...
//p[5]=6