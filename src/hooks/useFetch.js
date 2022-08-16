import request from "../utils/request";
import { useEffect, useState } from "react";

export default function useFetch(url){
    const [data, setData] = useState(null);
    const isLoading = data ? false : true;

    useEffect(()=>{
        setData(null);
        request(url).then( res => {
            setData(res)
        })
    }, [url])

    return {
        data,
        isLoading
    }
}