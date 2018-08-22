const express = require('express');
const passport = require('passport');
const app = express();

app.get('/api/current_user', (req, res) => {
  res.send('there');
});

app.listen(5000);
