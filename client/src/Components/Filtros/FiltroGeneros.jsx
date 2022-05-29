import React from 'react'
import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getGeneros, filtrar_Generos} from '../../redux/actions/index.js'
function FiltroGeneros({pagLocal}) {

  const dispatch = useDispatch();
  const genero = useSelector(state => state.generos)
  
  
  
  useEffect(() =>{
    dispatch(getGeneros())
  }, [dispatch])
  
  const filtrarGeneros = (e) => {
    e.preventDefault();
    dispatch(filtrar_Generos(e.target.value));
    pagLocal(1)
  }

  return (
    <div>
        <select className="filtrosGenero" onChange={(e) => filtrarGeneros(e)}>
        <option value="inicial">Géneros</option>
        <option value="all">Todos </option>
        {
          genero && genero.map((g) => (
            <option key={g.id} value={g.name}>
              {g.name}
            </option>
          ))
        }
      </select>
    </div>
  )
}

export default FiltroGeneros