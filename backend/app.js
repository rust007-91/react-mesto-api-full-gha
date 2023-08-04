require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet'); // защита от вэб уязвимостей
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { errors } = require('celebrate');
const errorHandler = require('./middlewares/error');
const routes = require('./routes/routes');
const {requestLogger, errorLogger} = require('./middlewares/logger');

const { PORT = 3000, DB_URL = 'mongodb://127.0.0.1:27017/mestodb' } = process.env;

const app = express();

app.use(cors());

mongoose.connect(DB_URL);

app.use(helmet()); // защита от вэб уязвимостей

app.use(bodyParser.json());
app.use(cookieParser());

// краш-тест сервера
app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.use(requestLogger); // логер запросов

app.use(routes); // обработчики роутов

app.use(errorLogger); // логер ошибок

app.use(errors());
app.use(errorHandler); // мидлвара ошибок

app.listen(PORT, () => {
  console.log('Сервер запущен');
});