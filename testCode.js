//Hacker Rank minimum loss problem

const minimumLoss = function(arrOfPrices){
  let minLoss = Infinity;

  for (let i = 0; i < arrOfPrices.length; i ++){
    let currentPrice = arrOfPrices[i];
    for (let j = i + 1; j < arrOfPrices.length; j ++){
      let futurePrice = arrOfPrices[j];
      let tempLoss = currentPrice - futurePrice;
      if (tempLoss > 0){
        minLoss = Math.min(minLoss, tempLoss);
      }
    }
  }

  return minLoss;
}

let housePrices = [20, 7, 8, 2, 5];

console.log(minimumLoss(housePrices))