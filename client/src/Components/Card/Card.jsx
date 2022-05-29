import React from 'react'
import './Card.css'
function Card({id, name, background_image, generos,  rating,released, leyenda}) {
  return (
    <div>
      <div className="container">
          <div  className="card">
              <h2 className="a">{name}</h2>
              <img className='img-card' src={background_image}></img>
              <div className='infoCard'>
                <h5 className='tituloCard'>Géneros</h5>
                <p>{generos}</p>
              </div>
              <div className='infoCard'>
               <h5 className='tituloCard'> Rating:</h5>
              <p>{rating}</p>
              </div>
              <div className='infoCard'>
                <h5 className='tituloCard'>Release Date</h5>
                <p>{released}</p>
              </div>
              <div className='infoCard'>
                <h5 className='tituloCard'>Leyenda</h5>
                <p>{leyenda}</p>
              </div>
              
          </div>
      </div>

    </div>
  )
}

export default Card
