import { useState } from "react";

export const useCounterWithFactor = (initialState = 10) => {
  
    const [state, setState] = useState(initialState);

    const decrement = (factor = 1) =>{
        setState(state - factor)
    }

    const reset = () =>{
        setState(initialState)
    }

    const increment = (factor = 1) =>{
        setState(state + factor)
    }

    return{
        state,
        decrement,
        reset,
        increment,
    }

};

//Ejemplo de uso.
//const {counter, increment, decrement, reset} = useCounter(0);
//No olvidar incorporarle los factores a decrement e increment.
