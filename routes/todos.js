const express = require("express");
const router = express.Router();

const {
    Todo,
} = require('../models');

function respondWithError(res, code=500) {
    return function (err) {
        console.error(err);
        res.status(code).send(err);
    }
}

router.route('/')
    .get((req, res) => {
        Todo.find()
            .then(res.json.bind(res))
            .catch(respondWithError(res))
    })
    .post((req, res) => {
        Todo.create(req.body)
            .then(res.status(201).json.bind(res))
            .catch(respondWithError(res));
    });

router.route('/:_id')
    .get((req, res) => {
        Todo.findById(req.params._id)
            .then((todo) => {
                if (todo) {
                    res.json(todo);
                } else {
                    res
                        .status(404)
                        .json({
                            message: `Could not find ${req.params._id}`,
                        });
                }
            })
            .catch(respondWithError(res));
    })
    .put((req, res) => {
        Todo.findOneAndUpdate(req.params, req.body, { new: true })
            .then(res.json.bind(res))
            .catch(respondWithError(res));
    })
    .delete((req, res) => {
        Todo.remove(req.params)
            .then(() => res.json({
                message: `Successfully deleted ${req.params._id}`
            }))
            .catch(respondWithError(res, 404));
    });

module.exports = {
    default: router,
};
