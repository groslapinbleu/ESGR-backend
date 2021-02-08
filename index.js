const express = require('express');
const cors = require('cors');
const axios = require('axios');

const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
  res.send(posts);
});
app.post('/posts', async (req, res) => {
  const id = randomBytes(4).toString('hex');
  console.log(`received body : ${req.body}`);
  const { title } = req.body;
  const post = {
    id,
    title,
  };
  posts[id] = post;
  res.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log('Hello! Listening to port 4000 for posts');
});
