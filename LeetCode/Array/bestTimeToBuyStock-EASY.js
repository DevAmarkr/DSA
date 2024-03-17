// var maxProfit = function (prices) {
//   let profit = 0
//   let buyMinStockPrice = Math.min(...prices)
//   let minStockPriceDay = prices.indexOf(buyMinStockPrice);
//   for (let i = minStockPriceDay; i < prices.length; i++) {
//     let priceMargin = prices[i + 1] - buyMinStockPrice
//     if (priceMargin > profit) {
//       profit = priceMargin
//     }
//     console.log(profit)
//   }
//   return profit
// };



var maxProfit = function (prices) {
  let buyPrice = prices[0];
  let currentProfit = 0;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < buyPrice) {
      buyPrice = prices[i]
    } else {
      currentProfit = prices[i] - buyPrice
     maxProfit =  Math.max(currentProfit,maxProfit)
    }
  }
  return maxProfit
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([7, 6, 4, 3, 1]))