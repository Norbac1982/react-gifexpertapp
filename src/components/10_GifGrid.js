/*
   79. useFetchGifs - obtener imágenes y bandera de carga

    Los Custom Hook, es una manera de extraer la logica de algun componente o logica que 
    yo quiero reutilizar y extraerla de tal manera que sea sencillo utilizarla nuevamente

    1. Vamos a crear un Custom Hook que nos permita cuando el useEfect carga inmediatamente 
        realizar la peticion fetch y a su vez indicarle cuando cuando estoy cargando y 
        cuando termino la carga 

    2. Para hacer Custom Hook se recomienda crear una nueva carpeta para estos
        /hooks
    
    3. Crear el archivo UseFetchGifs.js, el use significa que es un hook, este es un standard

    4. Configuramos el customHook en UseFetchGifs para que se simule la cargar de los GIFS
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

    //Agregamos el parametro category para que llege al UseFetchGifs.js
    //Para renombrar la desdestructuracion se usa :images
    const {data:images, loading} = UseFetchGifs( category ); //Este es el custom hook

    return (
        <>
            <h3>{ category }</h3>
            { 
                // loading ? <p>Loading</p> : null
                loading && <p>Loading</p> // Cuando el valor de setStata del UseFetchGifs cambie, se actualiza loading 
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
