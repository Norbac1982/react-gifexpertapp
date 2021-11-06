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
import { UseFetchGifs } from '../hooks/UseFetchGifs'
import { GifGridIttem } from './GifGridIttem';

/*
    Lo que hace esta funcion es hacer la peticion http, trae las imagenes, las procesa y 
    las retorna, por lo que se va a crear un nuevo componente para que sea mas simple 
    este componente
*/
const GifGrid = ({ category }) => {

    //Para renombrar la desdestructuracion se usa :images
    const {data:images, loading} = UseFetchGifs( category ); //Este es el custom hook

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>
            { 
                // loading ? <p>Loading</p> : null

                // Cuando el valor de setStata del UseFetchGifs cambie, se actualiza loading 
                loading && <p className="animate__animated animate__flash">Loading</p> 
                                          // y como es un && y loading es false, ya no se ejecuta <p>Loading</p>
            }
            {<div className="card-grid">
                    {
                        images.map( img => ( // Cuando el valor de setStata del UseFetchGifs cambie, se actualizan las imagenes
                            <GifGridIttem
                                key={img.id}
                                {...img}
                            />
                        ))
                    }
            </div>}
        </>
    )
}


export default GifGrid
