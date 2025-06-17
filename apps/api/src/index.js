require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());

app.get('/health', (req, res) => res.json({ status: 'api OK' }));

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`API listening on ${port}`));
