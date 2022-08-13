import request from "../utils/request";
import { useEffect, useState } from "react";

export default function useFetch(url){
    const [data, setData] = useState(null);
    const isLoading = data ? false : true;

    useEffect(()=>{
        request(url).then( res => {
            setData(res)
        })
    }, [])

    return {
        data,
        isLoading
    }
}