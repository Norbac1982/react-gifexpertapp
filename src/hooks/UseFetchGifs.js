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


        Ya no es necesario tener el setTimeOut
*/

import { useState, useEffect } from "react";
import { getGifs } from '../helpers/GetGifs';

export const UseFetchGifs = ( category ) => {

    // Definimos el estado inicial como un arreglo data vacio y el loading
    // Cuando se use por primera vez el UseFetchGifs, tenemos este estado que estara cargado 
    // por defecto
    const [state, setState] = useState( {
        data: [],
        loading: true
    })

    //Se le pueden poner efectos a los Custom Hooks
    //Aqui es donde se debe hacer la peticion y traer las imagenses
    //Puedo validar el efecto cuando la categoria cambia
    //Los efectos no pueden ser async, por que esperan algo sincrono
    useEffect(() => {
        getGifs( category ) //Esto es una promesa en GetGifs.js
            .then( imgs => {
                setState({
                    data: imgs, //aqui mandamos las imagenes
                    loading: false //cambia a false por que ya termino de cargar las imagenes
                })                 
            })
    }, [category])


    //Hacer la actualizacion manual del loading de true a false
    //setTimeout es una funcion propia de JavaScript que regresa un Callback
    // setTimeout(() => {
    //     setState({
    //         data: [1,2,3,4,5],
    //         loading: false
    //     })
    // }, 3000); // A los 3 segundo va a actualizar el estado de loading

    //Regresamos el estado
    return state; // { data: [], loading: true }

}

/* 
    La diferencia que hay con un funtional component, es que la importacion de react no es 
    necesaria a menos que nosotros regresemos un JSX, que no es este caso. Por lo tanto
    se puede borrar el import y el return

    import React from 'react'

    export const UseFetchGifs = () => {
        return (
            <div>
                
            </div>
        )
    }

*/


