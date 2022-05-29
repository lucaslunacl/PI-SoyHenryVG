import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {ordenar_AZ} from '../../redux/actions/index'
function OrdenAZ({pagLocal}) {

  const dispatch = useDispatch()
  const[orden, setOrden] = useState('')

  const handleOnChange = (e) =>{
    e.preventDefault()
    dispatch(ordenar_AZ(e.target.value))
    pagLocal(1)
    setOrden(e.target.value)
  }

  return (
    <div>
       <select className="filtrosAZ" onChange={(e) => handleOnChange(e)} >
        <option value="inicial">Alfabético</option>
        <option value="Asc">A - Z </option>
        <option value="Desc">Z - A </option>


      </select>
    </div>
  )
}

export default OrdenAZ
