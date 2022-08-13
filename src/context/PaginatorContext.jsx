import { useState, createContext, useContext } from "react";
import useFetch from '../hooks/useFetch';
import { PK_LIST_URL } from "../utils/constants";


const PageContext = createContext({
    currentPage: 0
})

export function PageContextProvider({children}){
    const [currentPage, setCurrentPage] = useState(0);
    const {data: pokemons, isLoading} = useFetch(PK_LIST_URL(currentPage*15));

    function previousPage(){
        if(currentPage > 0) setCurrentPage(currentPage-1);
    }

    function nextPage(){
        if(currentPage <= 1080/15) setCurrentPage(currentPage+1);
    }

    const context = {
        pokemons,
        isLoading,
        currentPage,
        previousPage,
        nextPage
    }

    return(
        <PageContext.Provider value={context}>
            {children}
        </PageContext.Provider>
    )
}

export const usePageContext = ()=>useContext(PageContext);