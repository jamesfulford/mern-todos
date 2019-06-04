const express = require("express");
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const {
    Todo,
} = require('./models');

app.use('/api/todos', require('./routes/todos').default);

app.use(express.static(__dirname + '/views'));
app.get('/', (req, res) => {
    res.sendFile('index.html');
});

const port = process.env.PORT || 4242;
app.listen(port, () => {
    console.info("App is running!", port);
})
