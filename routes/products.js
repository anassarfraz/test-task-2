var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');

/* GET users listing. */
router.get('/', async (req, res) => {
    const { result, error } = await productController.get_products();

    if (error) {
        res.status(error.status).json({ message: error.message });
    } else if (result) {
        res.status(result.status).json({ data: result.data });
    } else {
        res.sendStatus(500);
    }
});

module.exports = router;
