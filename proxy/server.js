const express = require('express');
const path = require('path');

const app = express();

app.use('/rooms/:id', express.static(path.join(__dirname, '/public')));
app.use('/rooms/:id', express.static(path.join(__dirname, './../georgina-reviews/client/')));

app.listen(3000, () => {
	console.log('Listening on port 3000');
});