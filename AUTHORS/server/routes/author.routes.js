
const AuthorController = require('../controllers/author.controller');


module.exports = function(app){
    app.get('/api', AuthorController.index);
    app.get('/api/allAuthors', AuthorController.findAllAuthors);
    app.post('/api/createAuthor', AuthorController.createAuthor);
    app.get('/api/author/:_id', AuthorController.findSingleAuthor);
    app.put("/api/updateExistingAuthor/:_id", AuthorController.updateExistingAuthor);
    app.delete("/api/deleteAuthor/:_id", AuthorController.deleteAuthor);
}