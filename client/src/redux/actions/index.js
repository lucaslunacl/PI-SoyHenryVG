import axios from 'axios'

export function getTJuegos(){
    return async function(dispatch){
        const info = await axios.get('/games')
        console.log(info)
        return dispatch({
            type:'GET_TJUEGOS',
            payload: info.data,
        })
    }
}

export function getNameJuego(name){

    return async function(dispatch){
        try {
            let buscarNombre = await axios.get(`/games?name=${name}`)
            console.log(buscarNombre)
            return dispatch({
                type: 'GET_NAMEJUEGO',
                payload: buscarNombre.data
            })

            
        } catch (error) {
         alert('ERROR, NO EXITE ESE JUEGO')   
        }
    }
}

export function getGeneros(){
    return async function(dispatch){
        let info = await axios.get(`/genres`)

        return dispatch({
            type: 'GET_GENEROS',
            payload: info.data
        })
    }
    // return async function(dispatch) {
    //     return axios.get('http://localhost:3001/genres')
    //     .then((genres) =>{
    //         dispatch({
    //             type:'GET_GENEROS',
    //             payload: genres.data
    //         })
    //     })
    //     .catch((error) => {
    //         console.error(error.message);
    //     })
        
    // }
}

export  function getPlataformas(){
    return async function(dispatch){
        let info = await axios.get(`/platforms`)
        return dispatch({
            type: 'GET_PLATAFORMAS',
            payload: info.data,
        })
    }
}

export function getDetalles(id){
    return async function(dispatch){
        try {
            let buscarID = await axios.get(`/games/${id}`)
            return dispatch({
                type: 'GET_DETALLES',
                payload: buscarID
            })
        } catch (error) {
            alert('ERROR: ' + error.message)
        }
    }
}

export function nJuego(payload) {
    return async function(dispatch) {
        const infoJuego = await axios.post('/games', payload);
        return infoJuego
    }
}

export function borrarJuego(id){
    return async function(dispatch) {
        try {
            const borrarJuego = await axios.delete('/games/' + id);
            return dispatch({
                type: 'BORRAR_JUEGO',
                payload: borrarJuego
            })
            
        } catch (error) {
            alert('NO SE PUEDO BORRAR')
        }
    }
}
// ----------------------------- FILTROS ----------------------------------- //

export function filtrar_Generos(genero){
    return{
        type: 'FILTRO_GENEROS',
        payload:genero
    }
}

export function filtrar_Juegos(juego){
    return{
        type: 'FILTRO_JUEGOS',
        payload: juego
    }
}

export function  ordenar_AZ(valor){
    return{
        type: 'ORDEN_AZ',
        payload:valor
    }
}

export function ordenar_Rating(valor){
    return{
        type: 'ORDEN_RATING',
        payload:valor
    }
}