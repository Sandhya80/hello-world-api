// Importing the previously installed Express module
const express = require('express');
// Creating an Express application
const app = express();
// Middleware to parse JSON bodies in requests
app.use(express.json());

// Initialize the greeting variable
let greeting = "Hello, World!";

// CREATE - Add or set a new greeting
app.post('/hello', (req, res) => {
  greeting = req.body.greeting || "Hello, World!";
  res.status(201).json({ message: 'Greeting created', greeting }); //create status code 201
});

// READ - Get the current greeting
app.get('/hello', (req, res) => {
  res.json({ greeting });
});

// UPDATE - Update the greeting
app.put('/hello', (req, res) => {
  const oldGreeting = greeting;
  greeting = req.body.greeting || greeting;
  console.log(`[PUT /hello] Old greeting: "${oldGreeting}", New greeting: "${greeting}"`);
  res.json({ message: 'Greeting updated', greeting });
});

// DELETE - Delete the greeting (by setting it to empty string)
app.delete('/hello', (req, res) => {
  console.log(`[DELETE /hello] Greeting before delete: "${greeting}"`);
  greeting = "";
  console.log(`[DELETE /hello] Greeting deleted.`);
  res.json({ message: 'Greeting deleted' });
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
