const express = require("express");
const router = express.Router();

const {
    Todo,
} = require('../models');

function respondWithError(res) {
    return function (err) {
        console.error(err);
        res.send(err);
    }
}

router.get("/", (req, res) => {
    Todo.find()
        .then(res.json.bind(res))
        .catch(respondWithError(res));
});

router.post('/', (req, res) => {
    Todo.create(req.body)
        .then(res.status(201).json.bind(res))
        .catch(respondWithError(res));
});

router.get('/:id', (req, res) => {
    Todo.findById(req.params.id)
        .then(res.json.bind(res))
        .catch(respondWithError(res));
});

router.put('/:_id', (req, res) => {
    Todo.findOneAndUpdate(req.params, req.body, { new: true })
        .then(res.json.bind(res))
        .catch(respondWithError(res));
});

router.delete('/:_id', (req, res) => {
    Todo.remove(req.params)
        .then(() => res.json({
            message: `Successfully deleted ${req.params._id}`
        }))
        .catch(respondWithError(res));
});

module.exports = {
    default: router,
};
