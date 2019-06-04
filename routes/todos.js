const express = require("express");
const router = express.Router();

const {
    Todo,
} = require('../models');

router.get("/", (req, res) => {
    Todo.find()
        .then((todos) => {
            res.json(todos);
        })
        .catch((err) => {
            console.error(err);
            res.send(err);
        });
});

module.exports = {
    default: router,
};
