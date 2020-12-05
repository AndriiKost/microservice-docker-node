const express = require('express');
const app = express();
const port = 8001;
const cars = require('./data');

app.get('/car', (req, res) => {
    console.log('/car endpoint hit');
    res.send(cars);
});

app.get('/car/:id', (req, res) => {
    const id = req.params.id;
    console.log('/car/:id endpoint hit with id = ', id);
    if (!id) res.send(null);
    const car = cars.find(car => car.id === id);
    if (!car) res.send(null);
    res.send(car);
});

app.listen(port, () => {
  console.log(`Car service listening at ${port}`)
})