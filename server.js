'use strict';
const cors = require('cors');

const express = require('express');

const pug= require('pug');
const fccTesting = require('./freeCodeCamp/fcctesting.js');

const app = express();
app.use(cors());
fccTesting(app); //For FCC testing purposes
app.use("/public", express.static(process.cwd() + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.set('view engine', 'pug')
app.set('views', './views/pug')

app.route('/').get((req, res) => {
  res.render('index')
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
