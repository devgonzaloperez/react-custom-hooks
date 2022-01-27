import React, { useEffect, useRef, useState } from 'react';

export const useFetch = (url) => {

    const isMounted = useRef(true);
    const [state, setState] = useState({data: null, loading: true, error: null});

    useEffect(()=>{
        return () =>{ isMounted.current = false}
    }, [])

    useEffect(()=>{

        setState({data: null, loading: true, error: null});

        fetch(url)
            .then(res => res.json())
            .then(data => {
                
                if (isMounted.current){
                    setState({
                        data: data,
                        loading: false,
                        error: null
                    })
                }

            })
            .catch(()=>{
                setState({
                    data: null,
                    loading: false,
                    error: "No se pudo cargar la información."
                })
            })

    }, [url])

    return state;

};

//Ejemplo de uso.
//const url = "endpoint de un api";
//const {data: null, loading: true, error: null} = useFetch(url);
