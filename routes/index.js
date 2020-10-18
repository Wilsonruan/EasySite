const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('/EasySite/public/login.html', { title: 'Express'});
});

module.exports = router;