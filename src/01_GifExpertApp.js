/*
    69. GifExpertApp - Component

    Una manera de crear Funtional Components es tecleando rafcp y el autocomplementador dara la opcion de 
    crear un react Function Component como se visualiza abajo

    Vamos a ocupar Gif animados del siguiente API

        https://developers.giphy.com/docs/api/endpoint#search

    En el cual ya tengo mi proyecto creado y hay q irlo integrando

    70. Creando una lista de Categorias
        Crear una lista ordenada con <ol><li></li></ol>

        Para obtener los valores dentro del html hay q desestructurar con las llaves { }

        El metodo map tiene la funcionalidad de crear un objeto que tiene la capacidad de
        recorrer el arrego donde tiene dos parametros, el segundo es el indice

        Hay que regresar un valor para q tengo que imprimir, se regresa el <li></li>
        pero para que react sepa que valor esta iterando, hay que agregarle el indice del mapa
        el cual es del arrego cateries. De lo contrario, se imprime un error en la consola de la
        herramienta del desarrollador en chrome.
            categories.map( (category,i) => {
                return <li key={ i }> Hola </li>
            }
        Pero hacerlos de la manera anterior crea conflictos cuando manipulamos la informacion del 
        arreglo, por q ya no se actualiza la lista y se accede a informacion que ya no existe y 
        genera errores.

        Lo correcto es esto 
            categories.map( category => {
                return <li key={ category }> {category} </li>
            }
        donde el key es el primer parametro del map 'category' y yo no es requerido el parametro
        indice del mapa.

        De la siguiente manera, no se puede trabajar con arreglos dinamicos, ya que es una constante
            const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

        Hay que usar el Hook (useStates), incluso si el cambio lo hacen desde la herramienta del desarrollador
        en la pestana de componentes, se actualiza instantaneamente de la siguiente manera:
            const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

        Para agregar un nuevo elemento a la lista, se usa el segundo parametro del Hook, pero 
        de la siguiente manera:
            setCategories([...categories, 'Nueva Categoria']);

        Donde [...categories, 'Nueva Categoria'] es el arreglo del hook, para acceder al arreglo
        hay es usar el operador spred ...  y luego el nombre del arreglo de la siguiente manera
            ...categories
        Y finalmente el nuevo valor como segundo parametro
            'Nueva Categoria'

        Si se quiere agregar elementos al inicio del arreglo, es de la siguiente manera
            setCategories(['Nueva Categoria', ...categories]);

        Otra manera es usar un callback de la siguiente manera
            setCategories( cats => ['Nueva Categoria', ...categories]);

        Donde el primer agumento cats que devuelve un nuevo arreglo con todas las caterioas mas el 
        nuevo valor: 'Nueva Categoria'
        
        El primer argumento cats es el estado anterior de categories y luego tienen que devolver el 
        nuevo estado: ['Nueva Categoria', ...cats]
        El nuevo estado es un nuevo arreglo con todos los valores anteriores mas el que estamos agregando
*/

import React, { useState } from 'react'

const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    //La siguiente funcionalidad va agregar un nuevo valor al arreglo, haciendo clic en el boton
    const handleAdd = () => {
        //setCategories([...categories, 'Nueva Categoria']);
        //setCategories(['Nueva Categoria', ...categories]);
        setCategories( cats => ['Nueva Categoria', ...cats]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <hr/>

            <button onClick={ handleAdd } >Agregar</button>

            <ol>
                {
                    categories.map( category => {
                        return <li key={ category }> {category} </li>
                    })
                }
            </ol>
        </>
    );
}

export default GifExpertApp;
