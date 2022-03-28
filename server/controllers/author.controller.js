

module.exports.index = (req, res) => {
    res.json({
        message: 'Hello World'
    })
}

const { modelName } = require('../models/authors.model');
const Author = require('../models/authors.model');

module.exports.getAllAuthors = (req, res) => {
    Author.find()
        .then(authors => {
            console.log(authors);
            res.json(authors);
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
}

module.exports.getOneAuthor = (req, res) => {
    Author.findOne({_id: req.params.id})
        .then(author => res.json(author))
        .catch(err => console.log(err))
}

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(author => res.json(author))
        .catch(err => console.log(err));
}

module.exports.updateOneAuthor = (req, res) => {
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updateAuthor => res.json(updateAuthor))
        .catch(err => res.json(err))
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => console.log(err))
}