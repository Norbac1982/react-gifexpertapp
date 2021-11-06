/*
    76. className - Clases de css
    
    1. Se actualiza el index.css para darle al componente de las imagenes pas presentacion a 
        modo de contenedor tipo card
    2. Se agrega la propiedad classNama al div, ojo, no se usa class por que es una palabra
        reservada de javaScript, por lo tanto, para no generar incosistencias con react, 
        se cambia por la palabra reservada className.
*/

import React from 'react'

export const GifGridIttem = ( {id, title, url} ) => {

    return (
        <div className="card">
            <img src={url} alt={title} />
            <p> { title } </p>

        </div>
    )
}
