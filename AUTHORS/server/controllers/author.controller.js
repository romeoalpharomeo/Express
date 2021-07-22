const {Author} = require('../models/author.model');

module.exports.index = (req,res) => {
    res.json({
        message: "Hello Workd"
    })
}

module.exports.findAllAuthors = (req, res) => {
    console.log("Finding the Authors...")
    Author.find()
        .then(allAuthors => res.json({ authors: allAuthors }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createAuthor = (req, res) => {
    const { name } = req.body;
    Author.create({
        name,
    })
        .then(author=>res.json(author))
        .catch(err=>res.json(err))
}

module.exports.findSingleAuthor = (req, res) => {
    Author.findOne({ _id: req.params._id })
        .then(oneSingleAuthor => res.json({ author: oneSingleAuthor }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateExistingAuthor = (req, res) => {
    Author.findOneAndUpdate(
        { _id: req.params._id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAuthor => res.json({ author: updatedAuthor }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params._id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}