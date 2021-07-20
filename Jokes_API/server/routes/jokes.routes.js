const JokeController = require("../controllers/jokes.controller");

module.exports = app => {
    app.get("/api/allJokes", JokeController.findAllJokes);
    app.post("/api/createJoke", JokeController.createJoke);
    app.get("/api/findSingleJoke/:id", JokeController.findSingleJoke);
    app.patch("/api/updateExistingJoke/:_id", JokeController.updateExistingJoke);
    app.delete("/api/deleteJoke/:_id", JokeController.deleteJoke);
    app.get("/api/findRandomJoke", JokeController.findRandomJokes);
}