const productController = require('../controllers/productController');
const axios = require('axios');

describe('POSTIVE TEST CASES', () => {
	jest.mock('axios');
	describe('PRODUCTS', () => {
        it('Should get products and output json object with success request status code', async () => {
            const mockReq = {};
            const mockRes = {
                json: jest.fn(),
                status: jest.fn().mockReturnThis(),
            };
            const { result } = await productController.get_products(
                mockReq,
                mockRes
            );
            expect(result).toMatchObject({ status: 200 });
        });
    });
});

describe('NEGATIVE TEST CASES', () => {
	jest.mock('');
	describe('PRODUCTS', () => {
        it('Should not get products and output json object with 500 request status code', async () => {
            const mockReq = {};
            const mockRes = {
                json: jest.fn(),
                status: jest.fn().mockReturnThis(),
            };
			jest.spyOn(axios, 'get').mockRejectedValue(new Error('API failure'));
            const { error } = await productController.get_products( mockReq, mockRes );
            expect(error).toMatchObject({ status: 500 });
        });
    });
});
