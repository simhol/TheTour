const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello again', app: 'TheTour' });
});

app.post('/', (req, res) => {
  res.send('This is a POST endpoint');
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
