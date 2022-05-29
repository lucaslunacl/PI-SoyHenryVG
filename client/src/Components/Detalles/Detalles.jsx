import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Detalles.css'
import Loader from "../Loader/Loader.jsx"

function Detalles() {
    const [detalles, setDetalles] = useState();
    const [borrar, setBorrar] = useState();
    let { id } = useParams()


    useEffect(() => {
        axios.get('/games/' + id)
            .then((res) => {
                setDetalles(res.data)
            })
        return () => {
            setDetalles(null) // lo limpio
        },
        axios.delete('/games/' +id)
        .then((res) => {
            setBorrar(res.data)
        })
    }, [id])


    return (
        <>
            <div className="container">


                {
                    detalles ?
                    <div className='card-container'>
                            <h2 className='tituloDetalle'> {detalles.name}</h2>
                            <div className='Contenedor'>
                                <div className='cont-img'>
                                    {/* IMAGEN */}
                                    <img className='card-img' src={detalles.background_image}></img>
                                </div>
                                {/* PLATAFORMAS */}
                                <div className='cont-info'>
                                    <div >
                                        <h3>Platforms:</h3>
                                        <div className='info' >{detalles?.id.length > 7 ? detalles.platforms?.map(j => j.name).join(' || ') :
                                            detalles.platforms?.map((p) => p.platform.name).join('||')}</div>
                                    </div>
                                    {/* RATING */}
                                    <div>
                                        <h3>Rating:</h3>
                                        <div className='info'>{detalles.rating}</div>
                                    </div>

                                    {/* GÉNEROS */}
                                    <div>
                                        <h3>Géneros:</h3>
                                        <div className='info'>{detalles?.genres.map(g => g.name).join(', ')}</div>
                                    </div>
                                    {/* RELEASE DATE */}
                                    <div>
                                        <h3>Release Date:</h3>
                                        <div className='info'>{detalles.released || detalles.releaseDate}</div>
                                    </div>
                                </div>
                            </div>
                            {/*DESCRIPTION */}
                            <div>
                                <div className='desc'>
                                    <h3>Descripcion:</h3>
                                    <div>{detalles.description_raw || detalles.descriptions}</div>
                                </div>
                            </div>
                        </div>


                        :
                        
                            <Loader />
                        
                }
    {
        borrar ? 
        <Link to="/Home">
        <button className='boton-volver'> BORRAR JUEGO</button>
        </Link> :
        <span></span>
    }
                <Link to="/Home">
                    <button className='boton-volver'>Volver al Inicio</button>
                </Link>
            </div>

        </>
    )
}

export default Detalles