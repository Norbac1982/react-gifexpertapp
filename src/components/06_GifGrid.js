/*
   75. Mostrar los titulos de las imagenes
            
     Se actualizo el return del componente GifGrid

     Esto se hizo para mandar imagenes GIF al nuevo componente <GifGridIttem/>
     Se desestructuro el hook de 
        const [images, setImage]

    para mandar al arrego de 
        images
    al nuevo compoenente <GifGridIttem/>

    La desestructuracion fue hacer un Spred de la siguiente manera 
        {...img}
    Lo que realmente hace es tomar todas pas propiedades de 
        images
            id
            title
            url
    y mandarlos como parametros independientes, por lo que el componente <GifGridIttem/>
    recibe la informacion de la sigueinte manera:

        const GifGridIttem = ( {id, title, url} )
    

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
        const { data } = await resp.json(); //Se desestructura la respuesta y solo se obtiene el campo data
        
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

    //  anteriormente en el GifGridIttem usamos la propiedad 
    //    img={img}
    //  Usaremos el operador Spred en el img del elemento GifGridIttem quedando asi:
    //  {...img}
    // De esta menera se manda cada una de las propiedades del img como si fueran parametros 
    // independientes     
    return (
        <div>
            <h3>{ category }</h3>

                {
                    images.map( img => ( 
                        //Se elimina por que agrgagamos un nuevo componente GifGridIttem
                        //<li key={img.id}> {img.title} </li> 
                        <GifGridIttem
                            key={img.id}
                            {...img}
                        />
                    ))
                }

        </div>
    )
}


export default GifGrid
