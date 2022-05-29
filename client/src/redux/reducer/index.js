const initialState = {
    juego: [],
    TJuegos: [],
    generos: [],
    plataformas: [],
    detalles: [],
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        // TODOS LOS JUEGOS 
        case 'GET_TJUEGOS':
            return {
                ...state,
                juego: action.payload,
                TJuegos: action.payload
            }
        case 'GET_PLATAFORMAS':
            return {
                ...state,
                plataformas: action.payload
            }
        case 'GET_GENEROS':
            return {
                ...state,
                generos: action.payload
            }
        case 'GET_DETALLES':
            return {
                ...state,
                detalles: action.payload
            }
        case 'GET_NAMEJUEGO':
            return {
                ...state,
                juego: action.payload
            }
        case 'NUEVO_JUEGO':
            return {
                ...state,
            }
        case 'BORRAR_JUEGO':
            return {
                ...state,
                detalles: action.payload
            }
        case 'ORDEN_AZ':
            let ordenAZ = [...state.juego]
            let ordenar = ordenAZ.sort((a, b) => {
                if (a.name.toUpperCase() < b.name.toUpperCase()) { return action.payload === 'Asc' ? -1 : 1 }
                if (a.name.toUpperCase() > b.name.toUpperCase()) { return action.payload === 'Desc' ? -1 : 1 }
                return 0
            })


            return {
                ...state,
                juego: ordenar
            }

        case 'ORDEN_RATING':
            let ordenRating = [...state.juego]
            let orden = ordenRating.sort((a, b) => {
                if (a.rating < b.rating) { return action.payload === 'bajo' ? -1 : 1 }
                if (a.rating > b.rating) { return action.payload === 'alto' ? -1 : 1 }
                return 0
            })
            console.log(orden)
            return {
                ...state,
                juego: orden
            }

        case 'FILTRO_GENEROS':
            const genresApi = [...state.TJuegos];

            const filteredGenreApi = action.payload === 'all' ? genresApi : genresApi.filter((genre) => genre.Genres?.includes(action.payload))

            const filteredGenreDb = genresApi?.filter((x) => {
                for (let index = 0; index < x.genres?.length; index++) {
                    if (x.genres[index]?.name.includes(action.payload)) {
                        return true;
                    }
                }
                return false;
            })


            
            console.log(filteredGenreDb)

            const TGeneros = filteredGenreApi.concat(filteredGenreDb);

            return {
                ...state,
                juego: TGeneros
            }

        case 'FILTRO_JUEGOS':
            const juegoDb = action.payload === 'db' ?
                state.TJuegos.filter(g => g.created_inDB)
                :
                state.TJuegos.filter(g => !g.created_inDB)

            return {
                ...state,
                juego: action.payload === 'all' ? [...state.TJuegos] : juegoDb
            }


        default: {
            return state;
        }
    }
}
export default rootReducer