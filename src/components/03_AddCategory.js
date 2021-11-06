/*
    72. Comunicacion entre componentes
*/

import React, {useState} from 'react'
import PropTypes from 'prop-types';

//Se hace una desestructuracion del props para entender mejor que esta recibiendo este componente
const AddCategory = ({ setCategories })  => {

    const [inputValue, setInputValue] = useState('');

    //Funcion que obtienen el valor del evento que lo invoca, en este caso seria el evento del input text
    const handleInputChange = (e) => { 
        //Para que el input se actualice con el valor del teclado, se tiene que usar el segundo 
        //parametro del hook setInputValue quedando de la siguiente manera
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        // preventDefault es para que no se refresque toda la pagina.
        // De esta manera se evita este comportamiento antiguo en las paginas
        e.preventDefault();  
        
        //Validar que no se agrege a la lista un valor vacio
        if(inputValue.trim().length > 0){
            //Se accede directamente al setCategories de GifExpert.js por q se desestructuro const AddCategory = ({ setCategories })
            setCategories( cats => [...cats, inputValue ]); //Se agrega a la lista el valor del input
            setInputValue(''); // Despues del enter, vacia el valor del input
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={inputValue}
                onChange={ handleInputChange } 
                placeholder="Escribe aqui tu consulta..."/>
        </form>
    )
}

//Validar que estemos mandando una funcion, de esta manera obligamos a que usemos este componente
//con los argumentos que estamos esperando, es decir, por lo menos sabemos que tenemos que mandar
//una funcion
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
