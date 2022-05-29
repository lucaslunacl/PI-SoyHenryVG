const axios = require('axios');
const { Platform } = require('../db');
const {API_KEY}= process.env

const platformAPI = async (req, res, next) => {
    try {
        let platformPromApi = await axios.get(`https://api.rawg.io/api/platforms?key=${API_KEY}`)
        const platformAPI = platformPromApi.data.results

        platformAPI.map( async (g) => {
            await Platform.findOrCreate({
                where: {
                    name: g.name,
                }
            })
        })
        let allPlatforms= await Platform.findAll()
        res.status(200).json(allPlatforms)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    platformAPI,
}