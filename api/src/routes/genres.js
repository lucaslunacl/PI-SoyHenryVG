const { Router } = require('express');
const {genreAPI} = require('../Controllers/genresCR.js')


const router = Router();

router.get('/', genreAPI)


module.exports = router;
