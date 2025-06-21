import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// route
app.get('/route', (req, res) => {
//   res.send('This is a route response!');
  const route = [
    { id: 1, name: 'Route 1' },
    { id: 2, name: 'Route 2' },
    { id: 3, name: 'Route 3' }
  ]
    res.send(route);
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});