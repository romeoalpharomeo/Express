
const ProductController = require('../controllers/product.controller');


module.exports = function(app){
    app.get('/api', ProductController.index);
    app.get('/api/allProducts', ProductController.findAllProducts);
    app.post('/api/createProduct', ProductController.createProduct);
    app.get('/api/product/:id', ProductController.findSingleProduct);
    app.put("/api/updateExistingProduct/:_id", ProductController.updateExistingProduct);
    app.delete("/api/deleteProduct/:_id", ProductController.deleteProduct);
}