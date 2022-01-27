/*USECOUNTER2*/

//El funcionamiento es igual al USECOUNTER, pero con algunas modificaciones en los nombres

import { useState } from "react";

export const useCounter = (initialState = 10) => {
  
    const [counter, setCounter] = useState(initialState);

    const decrement = () =>{
        setCounter(counter - 1)
    }

    const reset = () =>{
        setCounter(initialState)
    }

    const increment = () =>{
        setCounter(counter + 1)
    }

    return{
        counter, //Número.
        decrement, //Función.
        reset, //Función.
        increment, //Función.
    }

};
