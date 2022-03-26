const express = require('express');
const router = express.Router();
const FonctionCtrl = require('../Services/fonction');

router.post('/recommand', FonctionCtrl.recommand);


module.exports = router;