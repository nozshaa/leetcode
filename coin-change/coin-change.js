/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const ways = new Array(amount+1).fill(amount+1);
    ways[0] = 0;
    // for(let amount = 1; amount < ways.length; amount++) {
    //     for(const coin of coins) {
    //         if(coin<=amount) {
    //             ways[amount] = Math.min(ways[amount], ways[amount - coin]+1);
    //         }
    //     }
    // }
        for(const coin of coins) {
        for(let amount = 1; amount < ways.length; amount++) {
            if(coin<=amount) {
                ways[amount] = Math.min(ways[amount], ways[amount - coin]+1);
            }
        }
    }
    console.log(ways)
    return ways[amount] > amount ? -1 : ways[amount];
};