const { Router } = require('express');
const gamesRoute = require('./games')
const genreRoute = require('./genres')
const platformsRoute =require('./platforms')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.use('/games', gamesRoute);
router.use('/genres', genreRoute);
router.use('/platforms', platformsRoute);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
