const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const axios = require('axios');

app.use(express.static(path.resolve(__dirname, '../dist')));

app.use(cors({ origin: '*' }));

// get img for base64 encoding deliverable
app.get('/image', function(req, res) {
  res.json('https://imgflip.com/s/meme/Conspiracy-Keanu.jpg');
});

app.get('/labels', function(req, res) {
  const labels = [
    {
      upperText: 'what if the blue i see',
      lowerText: 'isnt the same color you see'
    },
    {
      upperText: 'what if all the specs we see in the light',
      lowerText: 'are all miniature universe'
    },
    {
      upperText: 'what if the cia invented dinosaurs',
      lowerText: 'to discourage time travel'
    }
  ];
  res.json(labels);
});

const React = require('react');
const { renderToString } = require('react-dom/server');
const Clicker = require('./component/Clicker/Clicker.js');

app.get('/ssr', async (req, res) => {
  // can add try catch for error handling
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  const reactDom = renderToString(<Clicker data={response.data} />);
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(htmlTemplate(reactDom, response.data));
});

function htmlTemplate(reactDom, data) {
  return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <link rel="stylesheet" type="text/css" href="style.css">
            <title>React SSR</title>
            <script>window.__INITIAL__DATA__ = ${JSON.stringify({
              data
            })}</script>
        </head>
        
        <body>
            <div id="root">${reactDom}</div>
            <script src="./bundle.js"></script>
        </body>
        </html>
    `;
}

app.listen(3000, () => console.log('Listening on port 3000'));
