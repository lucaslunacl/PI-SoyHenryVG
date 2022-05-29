import React from 'react'

import './Paginado.css'
function Paginado({ JuegosxPagina, TJuegos, paginado, valor }) {
    const numeroPaginas = []
    for (let i = 1; i <= Math.ceil(TJuegos / JuegosxPagina); i++) {
        numeroPaginas.push(i)
    }

   const handlePrev = ()=>{
       if(valor === 1){
        return alert('NO HAY PAGINAS PARA RETROCEDER')
       }else{
           
           paginado(valor -1)
       }
       window.scrollTo(0, 0)
   }


   const handleNext = ()=>{
    if( valor === 11){
        return alert('NO HAY PAGINAS PARA AVANZAR')
       }else{
           
           paginado(valor + 1)
       }
       window.scrollTo(0, 0)
   }
    return (
        <div>
            <div className="pag">
                {
                    TJuegos !== 0 ? 
                    
                    <button type="button" onClick={handlePrev}>PREV</button>
                    :
                    null
                }
                {
                    numeroPaginas && numeroPaginas.map(numero => (

                        <div className="btn-paginado" key={numero.toString()}>

                            <button className={numero === valor ? 'actual' : 'boton-paginado'}
                                onClick={() => paginado(numero)}>
                                {numero}
                            </button>

                        </div>
                    ))
                }
                    {
                    TJuegos !== 0 ? 
                    
                    <button type="button" onClick={handleNext}>NEXT</button>

                    :
                    null
                }
                
            </div>
        </div>
    )
}

export default Paginado