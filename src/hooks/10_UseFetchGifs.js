/* 
    79. useFetchGifs - obtener imágenes y bandera de carga

    Este es un Custom Hook

    1. Se hace la simulacion de la carga de imagenes con un 
        useEffect
            Dentro de este invocamos la promesa getGifs
            Con el then, simulamos el tiempo de carga a 2 segundo
            Cargamos las imagenes con el setState

        useState
            Define un arreglo para cargar los datos de la imagenes
            Define la bandera loading para que cuando cambie de estado, presente las 
            imagenes de la consulta

            El setState, va a disparar una renderizacion en el GifGrid.js

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
                setTimeout(() => {   
                    //console.log(imgs); para ver despues de 1seg, las imagenes consultadas
                    setState({
                        data: imgs, //aqui mandamos las imagenes
                        loading: false //cambia a false por que ya termino de cargar las imagenes
                    })                 
                }, 2000);
                
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


