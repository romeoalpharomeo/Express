const Joke = require("../models/jokes.model");

module.exports.findAllJokes = (req, res) => {
    console.log("Finding the jokes...")
    Joke.find()
        .then(allJokes => res.json({ jokes: allJokes }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createJoke = (req, res) => {
    console.log("Creating the joke...")
    Joke.create(req.body)
        .then(newJoke => res.json({ joke: newJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findSingleJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneSingleJoke => res.json({ joke: oneSingleJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => res.json({ joke: updatedJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findRandomJokes = (req, res) => {
    console.log("Finding the jokes...")
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    Joke.find()
        .then(allJokes => {
            let randomJoke = getRandomInt(0,allJokes.length - 1)
            console.log(randomJoke)
            res.json({ jokes: allJokes[randomJoke] })})
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}