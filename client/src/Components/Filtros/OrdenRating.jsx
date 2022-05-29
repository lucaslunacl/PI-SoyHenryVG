import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {ordenar_Rating} from '../../redux/actions/index'

function OrdenRating({pagLocal}) {
  const dispatch = useDispatch()
  const[orden, setOrden] =useState('')

  const handleOnChange = (e) =>{
    e.preventDefault()
    dispatch(ordenar_Rating(e.target.value))
    pagLocal(1)
    setOrden(e.target.value)
  }
  return (
    <div>
      <select className="filtrosRating" onChange={(e) => handleOnChange(e)}>
        <option value="inicial">Rating</option>
        <option value="bajo">Rating bajo </option>
        <option value="alto">Rating alto </option>


      </select>
    </div>
  )
}

export default OrdenRating
