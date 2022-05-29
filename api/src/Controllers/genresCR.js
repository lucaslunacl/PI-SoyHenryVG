const axios = require('axios');
const { Genre } = require('../db');
const {API_KEY}= process.env

const genreAPI = async (req, res, next) => {
    try {
        let genrePromApi = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
        const genreApi = genrePromApi.data.results

        genreApi.map( async (g) => {
            await Genre.findOrCreate({
                where: {
                    name: g.name,
                }
            })
        })
        let allGenres= await Genre.findAll()
        res.status(200).json(allGenres)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    genreAPI,
}