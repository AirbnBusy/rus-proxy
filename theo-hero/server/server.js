const express = require('express');
const cors = require('cors');

const app = express();
const path = require('path');
const { selectImageURIsByListingID } = require('../database/db-func');

app.use(cors());

// app.use('/api/listings/:id', express.static(path.resolve(__dirname, '../public/')));
app.use('/api/listings/:id', express.static(path.resolve(__dirname, '../dist/')));

app.get('/api/listings/:listingID/photos', (req, res) => {
  const { listingID } = req.params;
  selectImageURIsByListingID(listingID)
    .then(imageURIs => res.status(200).send(imageURIs))
    .catch(err => res.status(500).send(err.message));
});

app.listen(3003, () => {
  console.log('listening on port 3003');
});

module.exports = app;
