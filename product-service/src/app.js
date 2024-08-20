const express = require('express');
const cors = require('cors');
// const { authMiddleware } = require('common-utils'); // Import the middleware
const { authenticateToken } = require('./middleware/auth')
const productRoutes = require('./routes/productRoutes');


const app = express();

app.use(authenticateToken);
app.use(cors());
// app.use(authMiddleware);
app.use(express.json());

app.use('/api/products', productRoutes);

module.exports = app;
