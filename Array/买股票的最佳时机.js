prices = [7,1,5,3,6,4];
var number = 0;
var maxProfit = function(prices) {
    for(let i=0;i<prices.length-1;i++){
        number += Math.max(prices[i+1]-prices[i],0);
    }
    return number;
};
console.log(maxProfit(prices));