const axios = require('axios');
const { manipulateData } = require('../utilities/data_mapping');

const get_products = async function () {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        const data = manipulateData(response.data);
        return { result: { status: 200, data: data } };
    } catch (error) {
        return { error: { status: 500, message: error.message } };
    }
};

module.exports = { get_products };
