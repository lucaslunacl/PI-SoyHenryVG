import React, {useState} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import{getNameJuego} from '../../redux/actions/index'
import './Busqueda.css'
import Loader from "../Loader/Loader.jsx"

function Busqueda({pagLocal}) {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  
  

  function handleOnChange(e){
    e.preventDefault()
    setName(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()

    if(!name || name.length === undefined || name.length <= 1){
      setName('')
      return alert('Please enter some name')
    }else{
      setInterval(()=>{
        return <Loader/>
      }, 1000)
      dispatch(getNameJuego(name))
      setName("")
    }
    pagLocal(1)
  }

  return (
    <div>
      <form >
        <input type="search" placeholder="Buscar por nombre.." value={name} onChange={(e) => handleOnChange(e)}></input>
        <button type="submit" onClick={(e) =>handleSubmit(e)}> Buscar</button>
      </form>

    </div>
  )
}

export default Busqueda
