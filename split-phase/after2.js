const priceList = {
    '2453': 50,
};

class Order {
    #productId;
    #quantity;

    constructor(orderString) {
        this.#parseOrderString(orderString);
    }

    #parseOrderString(orderString) {
        const orderData = orderString.split(/\s+/);
        const productId = orderData[0].split('-')[1];
        const quantity = parseInt(orderData[1]);
        this.#productId = productId;
        this.#quantity = quantity;
    }

    #calcPrice() {
        const productPrice = priceList[this.#productId];
        return productPrice * this.#quantity;
    }

    set productId(value) {
        console.assert(typeof value === 'string');
        this.#productId = value;
    }

    set quantity(value) {
        console.assert(value > 0);
        console.assert(Number.isInteger(value));
        this.#quantity = value;
    }

    get price() {
        return this.#calcPrice();
    }
}

function calcOrderPrice2(orderString) {
    const order = new Order(orderString);
    return order.price;
}

export default calcOrderPrice2;
