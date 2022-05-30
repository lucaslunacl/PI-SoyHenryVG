const { Router } = require('express');
const { Op } = require('sequelize');
const axios = require('axios')
const { allGames } = require('../Controllers/gamesCR.js')
const { Games, Genre, Platform } = require('../db')

const { API_KEY } = process.env
const router = Router();
// RUTAS GET //


router.get('/', async (req, res, next) => {
    const { name } = req.query
    let totalGames = await allGames()

    if (name) {
        console.log(name)
        const nombre = await totalGames.filter(tg => tg.name.toLowerCase().includes(name.toLocaleLowerCase()))
        nombre.length ? res.status(200).send(nombre) : res.status(404).send('El juego no existe')
        console.log(nombre)

    } else {
        res.status(200).send(totalGames);
    }

})

router.get('/:id', async (req, res, next) => {
    const { id } = req.params
    
    try {
        if (id.includes('-')) { // es de la DB
            let gameDB = await Games.findOne({
                where: { id },
                include: [Genre, Platform]
            })
            return res.json(gameDB)
        } else { //ES DE LA API
            let respuesta = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
           res.json(respuesta.data)
        }
        
    } catch (error) {
        next(error)
    }
})



// RUTAS POST //
router.post('/', async (req, res, next) => {
    try {
        const { name, descriptions, rating, releaseDate, background_image, platforms, genres } = req.body;

        const newGame = await Games.create({
            name,
            descriptions,
            releaseDate,
            rating,
            background_image,
            platforms,
            genres,
            
        })
        let genreDb = await Genre.findAll({
            where: {
                name: genres
            }
        })
        let platformDb = await Platform.findAll({
            where: {
                name: platforms
            }
        })

        newGame.addGenre(genreDb)
        newGame.addPlatform(platformDb)
        res.json(newGame)

    } catch (error) {
        next(error)
    }
})


// RUTA DELETE 
router.delete('/:id', async(req, res, next) =>{
    const {id} = req.params

    try {
        if(id.includes('-')){
            const borrarJuego = await Games.destroy({
                where: {id: id}
            })
            res.send(200)
        }else{
            res.status(404).send('ERROR, no se pudo borrar')
        }
    } catch (error) {
        next(error)
    }
})

// RUTA PUT


module.exports = router;
