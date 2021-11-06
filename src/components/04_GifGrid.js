/*
    73. Fetch API - Obtener las imagenes deseadas 

    Obtiene imagens de la API GIPHY

        1. Llave del proyecto creado de API GIPHY
            apy_key = https://developers.giphy.com/dashboard/
        2. Propiedades para la busqueda de imagenes
            https://developers.giphy.com/docs/api/endpoint#search

    Las pruebas se pueden hacer desde postman:
        1. Definir el GET
            api.giphy.com/v1/gifs/search

        2.Definir los parametros 
            apy_key = https://developers.giphy.com/dashboard/
            limit = 10
            q = Goku

        3. GET final, de manera automatica
            api.giphy.com/v1/gifs/search?q=Goku&limit=10&api_key=qbylOKiqx31WgKZXbW7vaHtVD1hI7jmf
            
*/


import React from 'react'

const GifGrid = ({ category }) => {

    const getGifs = async() => {

        const url = 'https://api.giphy.com/v1/gifs/search?q=Goku&limit=10&api_key=qbylOKiqx31WgKZXbW7vaHtVD1hI7jmf';
        const resp = await fetch(url);
        const { data } = await resp.json(); //Se desestructura la respuesta y solo se obtiene el campo data
        
        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                image: img.images.downsized_medium.url
            }
        } )

        console.log(gifs);
    }

    getGifs();

    return (
        <div>
            <h3>{ category }</h3>
        </div>
    )
}


export default GifGrid
