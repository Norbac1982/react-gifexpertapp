/* 
    78. Custom Hook

    Los hook no son otra cosa mas que funciones. Este Hook es un Custom Hook

    Estos hook tambien pueden tener un estado. Y podria indicarle a otros componentes que lo
    utilicen, cuando deben renderizarse por que algo cambio. 

*/

import { useState } from "react";

export const UseFetchGifs = () => {

    // Definimos el estado inicial como un arreglo data vacio y el loading
    // Cuando se use por primera vez el UseFetchGifs, tenemos este estado que estara cargado 
    // por defecto
    const [state, setState] = useState( {
        data: [],
        loading: true
    })

    //Hacer la actualizacion manual del loading de true a false
    //setTimeout es una funcion propia de JavaScript que regresa un Callback
    setTimeout(() => {
        setState({
            data: [1,2,3,4,5],
            loading: false
        })
    }, 3000); // A los 3 segundo va a actualizar el estado de loading

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


