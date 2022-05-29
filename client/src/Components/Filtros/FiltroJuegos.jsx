import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {getTJuegos,filtrar_Juegos} from '../../redux/actions/index'
function FiltroJuegos({pagLocal}) {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getTJuegos())
    }, [dispatch])
  
    function handleFilterGame(e) {
      e.preventDefault()
      dispatch(filtrar_Juegos(e.target.value))
      pagLocal(1)
    }
    return (
        <div>
            <div>

                <select className="filtrosGame" onChange={(e) => handleFilterGame(e)}>
                    <option value="inicial">Juegos</option>
                    <option value="all">Todos </option>
                    <option value="api">Juegos Api</option>
                    <option value="db">Juegos Db</option>
                </select>
            </div>
        </div>
    )
}

export default FiltroJuegos