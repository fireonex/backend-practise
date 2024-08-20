"use strict";
const express = require('express');
const app = express();
const port = 4000;
app.get('/', (req, res) => {
    let message = 'hello world';
    res.send(message);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
