const express = require('express');
const bodyParser = require('body-parser');
const expressListEndpoints = require('express-list-endpoints');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/api/students', studentRoutes);
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Welcome to the School App API');
});

console.log(expressListEndpoints(app));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
