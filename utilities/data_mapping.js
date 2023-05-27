function manipulateData(products) {
    return products.map((product) => ({
        ...product,
        wordCount: product.title.split(' ').length,
        currency: 'USD',
        price: parseFloat((product.price * 1.1).toFixed(2)), // Increase price by 10%
    }));
}

module.exports = { manipulateData };
