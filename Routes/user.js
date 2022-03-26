const express = require('express');
const router = express.Router();
const userCtrl = require('../Services/user');
const auth = require('../tools/verifyToken')

router.post('/signup', userCtrl.signup);

router.post('/login', userCtrl.login);



module.exports = router;