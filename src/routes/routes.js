const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home', {
        title: "WBT - Home"
    });
});

module.exports = router;