const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send("Hello World!");
});

const port = 4242;
app.listen(port, () => {
    console.info("App is running!", port);
})
