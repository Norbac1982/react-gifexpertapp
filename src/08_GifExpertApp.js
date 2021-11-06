/*
    77. Helpers - getGifs

    1. Hacer que la categoria que se consulte, sea la primera que aparesca en la lista
        * El cambio se hace en AddCategory, que esta en el AddCategory.js
    
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
