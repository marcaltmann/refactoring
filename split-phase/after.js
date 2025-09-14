function calcOrderPrice(orderString) {
    const priceList = {
        '2453': 50,
    };

    const orderRecord = parseOrder(orderString);
    return calcPrice(orderRecord, priceList);
}

function parseOrder(orderString) {
    const orderData = orderString.split(/\s+/);
    const productId = orderData[0].split('-')[1];
    const quantity = parseInt(orderData[1]);
    return {
        productId,
        quantity,
    };
}

function calcPrice(orderRecord, priceList) {
    const productPrice = priceList[orderRecord.productId];
    return productPrice * orderRecord.quantity;
}

export default calcOrderPrice;
