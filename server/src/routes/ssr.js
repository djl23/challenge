const router = require('express').Router();
const React = require('react');
const { renderToString } = require('react-dom/server');
const Clicker = require('../client/component/Clicker/Clicker.js');
const axios = require('axios');
const { htmlTemplate } = require('../client/util');

router.get('/', async (req, res) => {
  // can add try catch for error handling
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  const reactDom = renderToString(<Clicker data={response.data} />);
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(htmlTemplate(reactDom, response.data));
});

module.exports = router;
