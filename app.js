const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const crud = require('./Routes/crud');

const service = require('./Routes/service');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/crud/', crud);
app.use('/api/services/', service);


console.log("Server Started");

app.get('/get/:id', (req, res) => {
    console.log(req.params);
    res.status(200).json({
        message: 'Hello Sunny'
    })
});


app.get('/get', (req, res) => {
    console.log(req.query);
    res.status(200).json({
        message: 'Hello Upendra'
    })
});


app.post('/post', (req, res) => {
    console.log(req.body);
    res.status(200).json({
        message: 'post success',
        body: req.body
    })
})

//To get proper format
app.use('/*', (req, res, next) => {
    res.status(404).json({
        messege: "No Resource Found.. :("
    })
    next();
});


module.exports = app;