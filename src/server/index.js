var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
var cors = require('cors');
const fetch = require('node-fetch');
var FormData = require('form-data');
require('dotenv').config();

const myKey = process.env.API_KEY;

const app = express();
app.use(cors());

app.use(express.json());

app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.sendFile('dist/index.html');
});

app.post('/test', function (req, res) {
  const meaningCloud = async () => {
    try {
      const clientText = req.body;

      const formdata = new FormData();
      formdata.append('key', myKey);
      formdata.append('txt', clientText.formText);
      formdata.append('lang', 'auto');
      const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
      };
      const resp = await fetch(
        'https://api.meaningcloud.com/sentiment-2.1',
        requestOptions
      );
      const respData = await resp.json();
      const { status, irony } = respData;
      res.send(
        `The text was analyzed and it is ${irony} and has status credits of ${status.credits}`
      );
    } catch (error) {
      res.send(`The following error occured: ${error}`);
    }
  };
  meaningCloud();
});

app.listen(8081, function () {
  console.log('Example app listening on port 8081!');
});
