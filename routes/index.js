var express = require('express');
var router = express.Router();
const product_routes = require('./products');
/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Task Two' });
});

router.use('/api/myproducts', product_routes);

module.exports = router;
