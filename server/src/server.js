const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(express.static(path.resolve(__dirname, '../dist')));
app.use(cors({ origin: '*' }));
app.use(require('./routes'));

app.listen(3000, () => console.log('Listening on port 3000'));
