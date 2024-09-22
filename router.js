const express = require('express');
const router = express.Router();
const kiisha = require('../controller/KiishaController.js')

router.get('/', kiisha.kj);
router.get('/about', kiisha.kk);
router.get('/service', kiisha.jj);
router.get('/galaxy', kiisha.kr);
router.get('/universe', kiisha.rk);
module.exports = router;