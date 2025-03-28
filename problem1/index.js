const express = require('express');
const numberRoutes = require('./routes/numberRoute');

const app = express();
const PORT = 3000;

app.use('/numbers', numberRoutes);

app.listen(PORT, () => {
  console.log("server started..!!");
});
