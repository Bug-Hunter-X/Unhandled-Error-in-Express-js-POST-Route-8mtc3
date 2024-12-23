const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const { name, email } = req.body; // Use destructuring for better readability
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  //Process User
  console.log(name, email);
  res.status(201).send();
});
app.listen(3000, () => console.log('Server listening on port 3000'));