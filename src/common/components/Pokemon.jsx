import React from 'react'
import useFetch from '../../hooks/useFetch'
import { SINGLE_PK_URL } from '../../utils/constants'

export default function Pokemon({name}) {
    const {data: pokemon, isLoading} = useFetch(SINGLE_PK_URL(name))

    return (
        <>
            {isLoading ? 'loading' : <h1>{pokemon.name}</h1>}
        </>
    )
}
