const {Product} = require('../models/product.model');

module.exports.index = (req,res) => {
    res.json({
        message: "Hello Workd"
    })
}

module.exports.findAllProducts = (req, res) => {
    console.log("Finding the products...")
    Product.find()
        .then(allProducts => res.json({ products: allProducts }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createProduct = (req, res) => {
    const { title, price, description } = req.body;
    Product.create({
        title,
        price,
        description,
    })
        .then(product=>res.json(product))
        .catch(err=>res.json(err))
}

module.exports.findSingleProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneSingleProduct => res.json({ product: oneSingleProduct }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params._id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => res.json({ product: updatedProduct }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params._id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}