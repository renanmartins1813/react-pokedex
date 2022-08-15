import React, {useEffect, useState} from 'react'
import useFetch from '../../hooks/useFetch'
import { SINGLE_PK_URL } from '../../utils/constants'

export default function Pokemon({name}) {
    const {data: pokemon, isLoading} = useFetch(SINGLE_PK_URL(name));
    const [easterEgg, setEasterEgg] = useState(0);

    function handleEasterEgg(e){
        if(name === 'pikachu'){
            setEasterEgg(easterEgg+1);
            if(easterEgg >= 2){
                e.target.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg';
            }
        }
    }

    useEffect(()=>{
        setEasterEgg(0);
    }, [pokemon])

    return (
        <>
            {isLoading ? 'loading' : (
                <>
                    <h1>{pokemon.name}</h1>
                    <p>{pokemon.types[0].type.name} {pokemon.types[1]?.type.name}</p>
                    <img src={pokemon.sprites.other['official-artwork'].front_default} alt={`Pokemon ${pokemon.name}'s Official Artwork`} onClick={handleEasterEgg} />
                    <p>{pokemon.stats[0].stat.name} {pokemon.stats[0].base_stat}</p>
                    <p>{pokemon.stats[1].stat.name} {pokemon.stats[1].base_stat}</p>
                    <p>{pokemon.stats[2].stat.name} {pokemon.stats[2].base_stat}</p>
                    <p>{pokemon.stats[3].stat.name} {pokemon.stats[3].base_stat}</p>
                    <p>{pokemon.stats[4].stat.name} {pokemon.stats[4].base_stat}</p>
                    <p>{pokemon.stats[5].stat.name} {pokemon.stats[5].base_stat}</p>
                </>
            )}
        </>
    )
}
