import React, { useState } from 'react'
import FiltroJuegos from '../Filtros/FiltroJuegos.jsx'
import FiltroGeneros from '../Filtros/FiltroGeneros'
import OrdenAZ from '../Filtros/OrdenAZ'
import OrdenRating from '../Filtros/OrdenRating'
import SearchBar from '../Filtros/Busqueda.jsx'
import './TFiltros.css'
function AllFilters({ pagLocal }) {


    return (
        <div>
            <div className="filtros">

                <div className="twoF">
                    <SearchBar pagLocal={pagLocal} />

                    <p>Filtrado Por: </p>
                    <OrdenAZ pagLocal={pagLocal} />
                    <OrdenRating pagLocal={pagLocal} />
                    <FiltroJuegos pagLocal={pagLocal} />
                    <FiltroGeneros pagLocal={pagLocal} />

                </div>
    
                
            </div>
        </div>
    )
}

export default AllFilters