/*
    80. Animaciones por CSS en nuestra aplicación

        Las instrucciones para agregar y usar las animaciones en CSS estan en la siguiente 
        pagina:

          https://animate.style/


        Maneras de usar las animaciones:
          1. $ npm install animate.css --save
          2. import 'animate.css';
          3. Agregar directamente el html
            <head>
              <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
              />
            </head>

        Se agrego en el index.html:

        <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />    
    
*/

import React from 'react'

export const GifGridIttem = ( {id, title, url} ) => {

    return (
        <div className="card animate__bounceIn">
            <img src={url} alt={title} />
            <p> { title } </p>

        </div>
    )
}
