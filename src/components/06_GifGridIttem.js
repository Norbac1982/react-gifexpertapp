/*
    75. Mostrar los títulos de las imágenes

    Se creo este componente para cargar las imagenes que se le proporcionen
*/

import React from 'react'

export const GifGridIttem = ( {id, title, url} ) => {
    /*Impreme en la consola de herramientas del desarrollador los parametros enciados desde el 
     <GifGrid/> mediante el Spred {...img}, de la siguiente manera: 
            <GifGridIttem
                key={img.id}
                {...img}
            />
    */
    //console.log({id, title, url});

    return (
        <div>
            <img src={url} alt={title} />
            <p> { title } </p>

        </div>
    )
}
