/*
   77. Helpers - getGifs

    1. Hacer que la consulta sea dinamica, de acuero al valor del input

    2. Hacer que la categoria q ingresemos aparesca al principio de la lista
        + Se hace en el GifExpertApp.js
    
    3. Hacer mas simple este componente, crean otro en el directorio helpers
*/


import React, {useState, useEffect} from 'react'
import { getGifs } from '../helpers/GetGifs';
import { GifGridIttem } from './GifGridIttem';

/*
    Lo que hace esta funcion es hacer la peticion http, trae las imagenes, las procesa y 
    las retorna, por lo que se va a crear un nuevo componente para que sea mas simple 
    este componente
*/
const GifGrid = ({ category }) => {

    const [images, setImage] = useState([]);

    useEffect( () => {
        // getGifs(); // Esta funcion ya no existe en este archivo, se paso a GetGifs.js

        //La siguiente funcion retorna una promesa, por lo que se puede manejar el .then
        getGifs(category)
            //.then( imgs => setImage( imgs) ); Este se puede resumir como sigue
            .then( setImage );
    }, [ category ])


    /*
        Line 33:8:  React Hook useEffect has a missing dependency: 'category'. Either include it or remove the dependency array  react-hooks/exhaustive-deps

        Este warning indica que el efecto que useEffect tiene un dependecia con category 
        Pide que la incluyamos o removamos la dependencia del arreglo.

        Si la categoria cambia, quisieramos volver a ejecutar el useEffect, de eso se trata el 
        warning, con acabar con esa dependencia solo hay que agregar en la linea 33 la categoria

            }, [ category ])

        Y el warning desaparece
    */
  
    return (
        <>
            <h3>{ category }</h3>
            <div className="card-grid">
                    {
                        images.map( img => ( 
                            <GifGridIttem
                                key={img.id}
                                {...img}
                            />
                        ))
                    }
            </div>
        </>
    )
}


export default GifGrid
