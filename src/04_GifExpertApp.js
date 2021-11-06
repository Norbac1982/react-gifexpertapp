/*
    73. Fetch API - Obtener imagenes deseadas

    GIPHY Developers
        https://www.udemy.com/course/react-cero-experto/learn/lecture/19756276#questions


    Crear y mandar a llamar el componente AddCategory, el cual es un html que permite
    agregar elementos a una lista desde un input

    Crear y mandar a llamar el componente GifGrid, para que vaya imprimiendo las nuevas
    categorias

*/

import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

   const [categories, setCategories] = useState(['One Punch']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>

            <ol>
                {
                    categories.map( category => ( 
                        <GifGrid 
                            key= { category }
                            category={ category }
                        />
                    ))
                }
            </ol>
        </>
    );
}

export default GifExpertApp;
