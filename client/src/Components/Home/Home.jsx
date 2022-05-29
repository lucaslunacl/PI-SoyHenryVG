import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getTJuegos, getGeneros, getPlataformas } from '../../redux/actions/index'
import NavBar from '../NavBar/NavBar.jsx'
import Card from '../Card/Card.jsx'
import Paginado from '../Paginado/Paginado.jsx'
import TFiltros from '../Filtros/TFiltros.jsx'
import Loader from "../Loader/Loader.jsx"
import errorIMG from '../../Images/Error.png'
import './Home.css'

function Home() {
  const dispatch = useDispatch()
  const TJuegos = useSelector((state) => state.juego)

  //paginado
  const [pagActual, setPagActual] = useState(1)
  const [juegoxPag, setJuegoxPag] = useState(15)

  const indexOfUltimoJuego = pagActual * juegoxPag;
  const indexOfPrimerJuego = indexOfUltimoJuego - juegoxPag

  const currentJuego = TJuegos?.slice(indexOfPrimerJuego, indexOfUltimoJuego)


  const paginado = (numeroPag) => {
    setPagActual(numeroPag)
  }



  useEffect(() => {
    dispatch(getGeneros())
    dispatch(getPlataformas())
    dispatch(getTJuegos())

  }, [dispatch])

  // if(TJuegos?.length <=0){
  //   return <Loader/>;
  // }



  return (
    <div>
      <NavBar />
      <TFiltros pagLocal={setPagActual} />
      {/* CARD´S JUEGOS*/}
      {/* PAGINADO */}

      <div className="paginado">
        <Paginado
          valor={pagActual}
          JuegosxPagina={juegoxPag}
          TJuegos={TJuegos.length}
          paginado={paginado}

        />
      </div>
      {
        TJuegos?.length === 0 ?

          <div>
            {
              <div><img className='imgerror' src={errorIMG} /></div>
            }

          </div>
          :


          <div className="contenedor-card">
            
            {

              currentJuego.map((juego) =>
              (
                
                <div className="cardHome" key={juego.id}>
                  <Link to={'/games/' + juego.id}>
                    <Card
                      key={juego.id}
                      id={juego.id}
                      name={juego.name}
                      background_image={juego.background_image}
                      generos={juego.genres?.map((j) => (j.name)).join(' - ') || juego.Genres?.join('-')}
                      rating={juego.rating}
                      released={juego.released || juego.releaseDate}
                      leyenda= {juego.id > 7 ? juego.leyenda : juego.leyenda}
                    />
                  </Link>
                </div>
              )
              )
            }

          </div>


      }
      <br></br>
      {/* PAGINADO */}

      <div className="paginado">
        <Paginado
          valor={pagActual}
          JuegosxPagina={juegoxPag}
          TJuegos={TJuegos.length}
          paginado={paginado}

        />
      </div>
      
    </div>
  )
}

export default Home
