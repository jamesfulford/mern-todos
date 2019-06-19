const express = require("express");
const app = express();

const bodyParser = require('body-parser');

app.use(require('morgan')('tiny'));
app.use(require('cors')());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const {
    Todo,
} = require('./models');
app.use(express.static(__dirname + '/public'));

app.use('/api/todos', require('./routes/todos').default);

app.use(express.static(__dirname + '/views'));
app.get('/', (req, res) => {
    res.sendFile('index.html');
});

const port = process.env.PORT || 4242;
app.listen(port, () => {
    console.info("App is running!", port);
})
