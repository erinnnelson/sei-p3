const PORT = process.env.PORT || 3000;
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.get('/', (req, res) => res.json({ msg: 'test' }));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cors());

app.listen(PORT, () => console.log('Tacos are served'));
