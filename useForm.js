import React, { useState } from 'react';

export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const reset = () =>{
        setValues(initialState);
    }

    const handleInputChange = (e) =>{

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })

    }

    return [values, handleInputChange, reset];

};

//Ejemplo de uso.
//const initialForm = {nane: "", age: 18, email: ""};
//const [values, handleInputChange, reset] = useForm(initialForm);