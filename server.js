const PORT = process.env.PORT || 3000;
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

// const { userRouter } = require('./routes/userRouter');
// const { questionRouter } = require('./routes/questionRouter');
const { answerRouter } = require('./routes/answerRouter');

const app = express();

app.get('/', (req, res) => res.json({ msg: 'test' }));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cors());

// app.get('/users', userRouter);
// app.get('/questions', questionRouter);
app.use('/answers', answerRouter);

app.listen(PORT, () => console.log(`Your tacos are being served on port ${PORT}`));