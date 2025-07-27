const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const userRoutes = require('./routes/userRoutes');

const port = process.env.PORT || 3000;
app.use(express.json());
app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
