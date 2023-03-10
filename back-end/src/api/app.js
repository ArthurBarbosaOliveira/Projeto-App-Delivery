const cors = require('cors');
const express = require('express');
const userRoutes = require('./routes/user.routes');
const productRoutes = require('./routes/product.routes');
const salesRoutes = require('./routes/sales.routes');

const errorHandler = require('./middlewares/ErrorHandler');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/images', express.static(`${__dirname}/../images`));

app.use(userRoutes);
app.use(productRoutes);
app.use(salesRoutes);

app.use(errorHandler);

module.exports = app;
