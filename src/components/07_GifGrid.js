/*
    76. className - Clases de css

*/


import React, {useState, useEffect} from 'react'
import { GifGridIttem } from './GifGridIttem';

const GifGrid = ({ category }) => {

    const [images, setImage] = useState([]);

    useEffect( () => {
        getGifs();
    }, [])

    const getGifs = async() => {

        const url = 'https://api.giphy.com/v1/gifs/search?q=Goku&limit=20&api_key=qbylOKiqx31WgKZXbW7vaHtVD1hI7jmf';
        const resp = await fetch(url);
        const { data } = await resp.json();
        
        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        } )

        console.log(gifs);
        setImage(gifs)
    }
  
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
