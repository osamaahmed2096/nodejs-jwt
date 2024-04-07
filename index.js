require('dotenv').config();
const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/auth');

app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/user', userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Auth server running on port ${process.env.PORT || 3000}`);
});