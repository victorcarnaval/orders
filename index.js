const express = require('express');

const app = express();

const PORT_NUMBER = 3000;

app.get('/orders', (req, res) => res.send('Hello Orders, API!'));

app.listen(PORT_NUMBER, () => console.log(`Orders API listening on port ${PORT_NUMBER}!`));