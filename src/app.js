const express = require('express');
const app = express();
const port = 7777;
const knex = require('knex')(require('../knexfile.js')['development']);

app.get('/', (req, res) => {
  res.send("Application up and running")
})

app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}`)
})

app.get('/pets', (req, res) => {
  knex('pet')
    .select('*')
    .then(pets => {
      let petNames = pets.map(pet => pet.name)
      res.json(petNames);
    })
})