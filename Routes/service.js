const express = require('express');
const router = express.Router();

router.get('/get', (req, res) => {
    console.log(req.query);
    res.status(200).json({
        message: `No records found related to the given query: ${req.query.search}`
    })
});

router.post('/post', (req, res) => {
    console.log(req.body);
    let email = req.body.email;
    let password = req.body.password;
    res.status(200).json({
        message: `Given email and password ${email == password ? 'matched' : 'not matched'}`
    })
});

router.put('/put', (req, res) => {
    console.log(req.body);
    res.status(200).json({
        message: `The sum of A + B: ${req.body.a + req.body.b}`
    })
});


module.exports = router;