const express = require('express');
const app = express();

const products = require('./routes/product')
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use(express.json());
app.use('/api/v1/',products)
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

module.exports = app;