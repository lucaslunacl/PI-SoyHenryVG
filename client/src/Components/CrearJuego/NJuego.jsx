import React, { useState, useEffect } from "react";
import "./A.css";
import { Link, useNavigate } from 'react-router-dom'
import Home from '../Home/Home.jsx'
import Loader from '../Loader/Loader.jsx'
import { useDispatch, useSelector } from "react-redux";
import { getGeneros, getPlataformas, nJuego } from '../../redux/actions/index.js'

function validarForm(input) {
  let cadenaURL = /((http|ftp|https):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/
  let cadenaDate = /^((19|20)\d\d)[- /.](([1-9]|[0][1-9]|1[012]))[- /.](([1-9]|[0][1-9]|1[012])|([12][0-9]|3[01]))$/
  let error = {}

  if (!input.name || input.name?.trim() >= 4) {
    error.name = 'Por favor, escribí algún nombre válido para el juego '
  } if (!(cadenaURL.test(input.background_image))) {
    error.background_image = 'Imagen inválida, será reemplazada por una default'
  }
  if (!input.rating || input.rating === parseInt('0') || input.rating <= parseInt('0') || input.rating > parseFloat('5')) {
    error.rating = 'Coloca un rating válida, en un rango de 0 a 5';
  }
  if (!input.descriptions || !input.descriptions.length) {
    error.descriptions = 'Coloca una descripcion'
  }
  if (!input.platforms[0]) {
    error.platforms = 'Coloca plataformas'
  }
  if (!input.genres[0]) {
    error.genres = 'Coloca generos'
  }
  if (!cadenaDate.test(input.releaseDate)) {
    error.releaseDate = 'El formato debe ser YYYY/MM/DD'
  }

  return error
}




export default function NJuego() {

  const dispatch = useDispatch()
  const genres = useSelector((state) => state.generos)
  const platforms = useSelector((state) => state.plataformas)
  const navigate = useNavigate()



  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: '',
    background_image: '',
    rating: '',
    releaseDate: '',
    descriptions: '',
    genres: [],
    platforms: [],
  })

  useEffect(() => {
    dispatch(getGeneros())
    dispatch(getPlataformas())
  }, [dispatch])

  function handleOnChange(e) {
    e.preventDefault()
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
    setErrors(
      validarForm({
        ...input,
        [e.target.name]: e.target.value,
      })
    )
  }

  function handleSubmit(e) {
    console.log(input)
    e.preventDefault()
    let regexURL = /((http|ftp|https):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
    if (!input.background_image || !(regexURL.test(input.background_image))) {
      input.background_image = 'https://assets.soyhenry.com/logoOG.png';
    }
    setErrors(
      validarForm({
        ...input,
        [e.target.name]: e.target.value,
      })
    )
    console.log(errors)

    if (Object.keys(errors).length === 0) {
      if (input.name.length >= 2) {
        dispatch(nJuego(input));
        alert('Juego creado Correctamente, Seras redireccionad@ en 3 segundos a la página principal')
        setInput({
          name: '',
          background_image: '',
          rating: '',
          realeseDate: '',
          descriptions: '',
          genres: [],
          platforms: [],
        })
        setTimeout(() => {
          navigate('/Home')
        }, 3000)

      } else {
        return errors

      }
    } else {

      return alert('El Juego no se pudo crear')
    }
  }

  let id = 0;
  function addKey() {
    return id++
  }

  function handleGeneroSelect(e) {
    e.preventDefault()
    setInput({
      ...input,
      genres: [...input.genres, e.target.value]
    })
  }

  function handlePlataformaSelect(e) {
    e.preventDefault()
    setInput({
      ...input,
      platforms: [...input.platforms, e.target.value]
    })
  }

  function handleDelete(e) {
    e.preventDefault()
    setInput({
      ...input,
      genres: input.genres.filter((gen) => gen !== e.target.value),
      platforms: input.platforms.filter((p) => p !== e.target.value)
    })
  }
  return (
    <>

      <form className="form" onSubmit={handleSubmit}>
        {/* NOMBRE */}
        <h1>CREAR JUEGO</h1>
        <div className="N-I">
          <div>
            <label>Nombre:</label>
            <input type="text" name="name" value={input.name} onChange={(e) => handleOnChange(e)}></input>
            {
              errors.name && (
                <p className="errores">{errors.name}</p>
              )
            }
          </div>
          {/* IMAGEN */}

          <div>
            <label>Imagen:</label>
            <input type="text" name="background_image" value={input.background_image} onChange={(e) => handleOnChange(e)} />
            {
              errors.background_image && (
                <p>{errors.background_image}</p>
              )
            }
          </div>
        </div>
        {/* RATING */}
        <div className="R-R">
          <div>
            <label>Rating:</label>
            <input type="text" name="rating" min="0" max="5" value={input.rating} onChange={(e) => handleOnChange(e)} />
            {
              errors.rating && (
                <p className="errores">{errors.rating}</p>
              )
            }
          </div>

          {/* RELEASE DATE */}

          <div>
            <label>Release Date:</label>
            <input type="text" name="releaseDate" value={input.releaseDate} onChange={(e) => handleOnChange(e)} />
            {
              errors.releaseDate && (
                <p className="errores">{errors.releaseDate}</p>
              )
            }
          </div>
        </div>
        {/* GÉNEROS */}
        <div className="GP">
          <div>
            <label>Géneros:</label>
            <select onChange={(e) => handleGeneroSelect(e)} >
              <option name='genres' key='kGen' > --- Seleccionar --- </option>
              {
                genres && genres.map((g) => (
                  <option key={g.id} value={g.name} name={g.name}>{g.name}</option>
                ))
              }
            </select>
            {
              errors.genres && (
                <p className="errores">{errors.genres}</p>
              )
            }
          </div>
          {/* PLATFORMS */}

          <div>
            <label>Plataformas:</label>
            <select onChange={handlePlataformaSelect}>
              <option name='platforms' key='kPlat' > --- Seleccionar --- </option>
              {
                platforms && platforms.map((p) => (
                  <option key={p.id} value={p.name} name={p.name}>{p.name}</option>
                ))
              }
            </select>
            {
              errors.platforms && (
                <p className="errores">{errors.platforms}</p>
              )
            }
          </div>
        </div>
        <div className="SelGP">
          <div>
            <p><u>Géneros Seleccionados:</u></p>
            <div className='group'>
              {

                input.genres.map((gen) => (
                  <div key={addKey()}>
                    <button className='btn-gp' onClick={(e) => handleDelete(e)} value={gen}>
                      {gen}
                    </button>
                  </div>
                ))

              }
            </div>
          </div>
          <div>
            <p><u>Plataformas Seleccionadas:</u></p>
            <div className='group'>
              {
                input.platforms.map((p) => (
                  <div key={addKey()}>
                    <button className='btn-gp' onClick={(e) => handleDelete(e)} value={p}>
                      {p}
                    </button>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className='descL'>
          <label>Descripción:</label>
          <input type="textarea" name="descriptions" value={input.descriptions} onChange={(e) => handleOnChange(e)} />
          {
            errors.descriptions && (
              <p className="errores">{errors.descriptions}</p>
            )
          }
        </div>

        <div>
          <input type="submit" value="Crear Juego"></input>
        </div>
      </form>
      <Link to="/Home">
        <button className='boton-volver'>Volver al Inicio</button>
      </Link>



    </>
  );
}