/*
    77. Helpers - getGifs
    
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
