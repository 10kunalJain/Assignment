const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const jokesRoutes = require('./routes/jokes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/jokes', jokesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
