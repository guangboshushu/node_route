// productController.js
module.exports = {
    get: {
        createProduct: {
            path: '/product',
            fn: (req, res) => {
                const product = req.query;
                console.log('product', product)
                res.json({ message: 'Product created', product });
            },
        }
    },
    post: {
        createProduct: {
            path: '/product',
            fn: (req, res) => {
                console.log('req', req.body.pd, typeof (req.body))

                const product = req.body
                res.send({ message: product.pd });
            },
        }
    }
    // 更多方法...
};
