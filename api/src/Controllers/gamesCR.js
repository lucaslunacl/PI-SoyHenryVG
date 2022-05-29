const axios = require('axios');
const {Games, Genre, Platform} = require('../db');
const {API_KEY}= process.env

const gamesAPI =   async() => {
        try {
            let gamesPage, gamesPage2, gamesPage3, gamesPage4, gamesPage5
            gamesPage = axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`) 
            gamesPage2 = axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=2`)
            gamesPage3 = axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=3`) 
            gamesPage4 = axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=4`) 
            gamesPage5 = axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=5`) 
            gamesPage6 = axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=6`) 
            gamesPage7 = axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=7`) 
            gamesPage8 = axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=8`) 


            const allPages = await Promise.all([gamesPage, gamesPage2, gamesPage3, gamesPage4, gamesPage5,gamesPage6, gamesPage7, gamesPage8])
            gamesPage = allPages[0].data.results;
            gamesPage2 = allPages[1].data.results;
            gamesPage3 = allPages[2].data.results;
            gamesPage4 = allPages[3].data.results;
            gamesPage5 = allPages[4].data.results;
            gamesPage6 = allPages[5].data.results;
            gamesPage7 = allPages[6].data.results;
            gamesPage8 = allPages[7].data.results;

           let allInfo = gamesPage.concat(gamesPage2).concat(gamesPage3).concat(gamesPage4).concat(gamesPage5).concat(gamesPage6).concat(gamesPage7).concat(gamesPage8)
           
           allInfo = allInfo.map((AI) =>{
               return {
                   id:AI.id,
                   name:AI.name,
                   desc:AI.desc,
                   released:AI.released,
                   rating:AI.rating,
                   background_image: AI.background_image,
                   platforms:AI.platforms.map(p => p.platform.name),
                  Genres: AI.genres.map(g=> g.name),
               }
           })
           return allInfo;
        } catch (error) {
            console.log(error);
        }
}


const gamesDB = () =>{
    try {
        return  Games.findAll({
            include: {
                model: Genre, Platform,
                attributes: ['name'],
                through: {
                    attributes:[],
                }
            }
        })
    } catch (error) {
        console.log(error)
    }
}


const allGames = async () =>{
    try {
        const gamesAPI_ = await gamesAPI()
        const gamesDB_ = await gamesDB()

        const games = gamesAPI_.concat(gamesDB_)

        return games
    } catch (error) {
        console.log(error)   
    }
}

module.exports = {
    gamesAPI,
    gamesDB,
    allGames
}