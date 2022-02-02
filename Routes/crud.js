const express = require("express");
const router = express.Router();


router.get('/router/:id', (req, res) => {
    console.log(req.params);
    res.status(200).json({
        message: 'Hello Router'
    })
});

router.post('/formSubmit', (req, res) => {
    console.log(req.body);
    res.status(200).json({
        message: 'Hello Post Submit'
    })
});



module.exports = router;