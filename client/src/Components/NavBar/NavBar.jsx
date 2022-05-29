import React from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom'
import img from '../../Images/videogamesController.png'
import TFiltros from '../Filtros/TFiltros.jsx'

function Nav() {
  return (
    <>
        <nav>
            <a className="imagen" href="/Home"><img src={img}></img></a>
            <h1 className="titulo"> PI - VideoGames</h1>
            <ul>
                <li><Link to='/Home'>Home</Link></li>
                <li><Link to='/Create'>Añadir Juego</Link></li>
            </ul>
        </nav>
           
            {/* {<TFiltros/>} */}
    </>
  )
}

export default Nav