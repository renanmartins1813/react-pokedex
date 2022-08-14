import React, {useEffect} from 'react'
import useFetch from '../../hooks/useFetch'
import { SINGLE_PK_URL } from '../../utils/constants'

export default function Pokemon({name}) {
    const {data: pokemon, isLoading} = useFetch(SINGLE_PK_URL(name));

    useEffect(()=>{
        console.log(pokemon);
    }, [pokemon])

    return (
        <>
            {isLoading ? 'loading' : (
                <>
                    <h1>{pokemon.name}</h1>
                    <img src={pokemon.sprites.other['official-artwork'].front_default} alt={`Pokemon ${pokemon.name}'s Official Artwork`} />
                    <p>{pokemon.stats[0].stat.name} {pokemon.stats[0].base_stat}</p>
                    <p>{pokemon.stats[1].stat.name} {pokemon.stats[1].base_stat}</p>
                    <p>{pokemon.stats[2].stat.name} {pokemon.stats[2].base_stat}</p>
                    <p>{pokemon.stats[5].stat.name} {pokemon.stats[5].base_stat}</p>
                </>
            )}
        </>
    )
}
