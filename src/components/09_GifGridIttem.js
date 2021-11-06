/*
    78. Custom Hook

    No se hizo nada
    
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
