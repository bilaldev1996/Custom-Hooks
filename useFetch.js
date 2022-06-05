import { useEffect, useRef, useState } from "react";

//Custom hook para realiar una peticion con FETCH

const useFetch = ( url ) => {

    if(!url){
        throw new Error('No url provided');
    }

    const [data, setData] = useState({data:null, loading:true, error:null});

    const isMounted = useRef(true);


    useEffect(() => {

        return () => {
            isMounted.current = false;
        }

    }, []);

    useEffect(() => {
        setData({data:null, loading:true, error:null});
        
            //Condicionar la peticion si el elemento esta desmontado
            isMounted.current && fetch(url)
            .then(response => response.json())
            .then(data => {
                setData({data, loading:false, error:null});
            })
        }, [url]);

    return data;

}

export default useFetch
