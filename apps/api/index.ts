import express from 'express';
const app = express();
app.use(express.json());

app.get('/v1/gigs', (req, res) => {
  res.json([{ id: 1, title: "Logo Design", price: 100 }]);
});

app.post('/v1/orders', (req, res) => {
  res.json({ success: true, order: req.body });
});

app.listen(3001, () => console.log("API running on http://localhost:3001"));
