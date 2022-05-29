const { Router } = require('express');
const {platformAPI} = require('../Controllers/platformsCR.js')

const router = Router();

router.get('/', platformAPI)

module.exports = router;