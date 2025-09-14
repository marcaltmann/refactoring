const priceList = {
  '2453': 50,
};

function calcOrderPrice(orderString) {
  const orderData = orderString.split(/\s+/);
  const productPrice = priceList[orderData[0].split('-')[1]];
  const orderPrice = parseInt(orderData[1]) * productPrice;
  return orderPrice;
}

console.log(calcOrderPrice('Trumpet-2453 2'));
