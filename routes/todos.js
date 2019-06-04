const express = require("express");
const router = express.Router();

const {
    Todo,
} = require('../models');

router.get("/", (req, res) => {
    res.json([]);
});

module.exports = {
    default: router,
};
