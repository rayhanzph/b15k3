function findHighestProfit(pricesArr) {
  // Memastikan ada 2 nilai

  if (pricesArr.length < 2) {
    throw new Error("Minimal Harus 2 nilai");
  }

  // kemungkinan pembelian pertama
  var minPrice = pricesArr[0];
  var maxProfit = pricesArr[1] - pricesArr[0];

  var minIndex = 0;

  for (var i = 1, length = pricesArr.length; i < length; ++i) {
    if (pricesArr[i] - minPrice > maxProfit) {
      maxProfit = pricesArr[i] - minPrice;
    }

    if (pricesArr[i] < minPrice && i !== length - 1) {
      minPrice = pricesArr[i];
      minIndex = i;
    }
  }

  return console.log(maxProfit);
}

findHighestProfit([10, 2, 11, 20, 3, 5]);
findHighestProfit([33, 29, 11, 3]);
