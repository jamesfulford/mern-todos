const express = require("express");
const app = express();

const {
    Todo,
} = require('./models');

app.get('/', (req, res) => {
    res.json({ name: 'James Fulford', email: 'james.fulford@outlook.com' });
});

const port = process.env.PORT || 4242;
app.listen(port, () => {
    console.info("App is running!", port);
})
