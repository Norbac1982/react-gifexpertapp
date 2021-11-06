/*
   78. Custom Hook

    Los Custom Hook, es una manera de extraer la logica de algun componente o logica que 
    yo quiero reutilizar y extraerla de tal manera que sea sencillo utilizarla nuevamente

    1. Vamos a crear un Custom Hook que nos permita cuando el useEfect carga inmediatamente 
        realizar la peticion fetch y a su vez indicarle cuando cuando estoy cargando y 
        cuando termino la carga 

    2. Para hacer Custom Hook se recomienda crear una nueva carpeta para estos
        /hooks
    
    3. Crear el archivo UseFetchGifs.js, el use significa que es un hook, este es un standard


*/


import React from 'react'
import { UseFetchGifs } from '../hooks/UseFetchGifs'
// import { getGifs } from '../helpers/GetGifs';
// import { GifGridIttem } from './GifGridIttem';

/*
    Lo que hace esta funcion es hacer la peticion http, trae las imagenes, las procesa y 
    las retorna, por lo que se va a crear un nuevo componente para que sea mas simple 
    este componente
*/
const GifGrid = ({ category }) => {

    // const [images, setImage] = useState([]);

    const {loading} = UseFetchGifs(); //Este es el custom hook
    console.log(loading);


    // Lo que hace el useEfect es que cuando se carga por primera vez lanza la peticion para 
    // obtener los gifs y los coloca en en las imagenes 
    // useEffect( () => {
    //     getGifs(category)
    //         .then( setImage );
    // }, [ category ])
  
    return (
        <>
            <h3>{ category }</h3>
            { loading ? 'Cargando...' : 'Data Cargada'}
            {/* <div className="card-grid">
                    {
                        images.map( img => ( 
                            <GifGridIttem
                                key={img.id}
                                {...img}
                            />
                        ))
                    }
            </div> */}
        </>
    )
}


export default GifGrid
