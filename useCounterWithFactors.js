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
