import React from 'react'
import { Link } from 'react-router-dom'
// import '../LandingPage/LandingPage.css'
import './LandingPage.css'
function LandingPage() {
    return (
        <div >
            <div className="fondo">
                <div className="container">
                    <div className="datos">
                        <h1>Proyecto Individual - Video Games</h1>
                        <span>Lucas Benjamín Luna Clarasó</span>

                    </div>
                    <Link className="landing-Link" to="/Home">
                        <button className="boton-acceso">
                            Ver Juegos
                        </button>
                    </Link>
                </div>
                </div>
        </div>
    )
}

export default LandingPage