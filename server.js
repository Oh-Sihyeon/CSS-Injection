const express = require('express');
const bodyParser = require('body-parser');
const { adminCredentials } = require('./models/account.js');
const { flag } = require('./models/flag.js');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

const id = adminCredentials.username
const pw = adminCredentials.password

app.get('/', (req, res) => {
  res.render('index', { id, pw });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === id && password === pw) {
    res.render('flag', { flag });
  } else {
    res.render('error', {message: 'Invalid credentials'});
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});