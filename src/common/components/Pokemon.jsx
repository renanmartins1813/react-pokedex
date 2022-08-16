import React, {useEffect, useState} from 'react'
import useFetch from '../../hooks/useFetch'
import { SINGLE_PK_URL } from '../../utils/constants'
import handleName from '../../utils/handleName';
import handleID from '../../utils/handleID';

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
        <section>
            {isLoading ? 'loading' : (
                <>
                    <h1>{handleName(pokemon.name)}</h1>
                    <h1>{handleID(pokemon.id)}</h1>
                    <p>{handleName(pokemon.types[0].type.name)} {handleName(pokemon.types[1]?.type.name)}</p>
                    <img src={pokemon.sprites.other['official-artwork'].front_default} alt={`Pokemon ${pokemon.name}'s Official Artwork`} onClick={handleEasterEgg} />
                    <p>HP {pokemon.stats[0].base_stat}</p>
                    <p>Attack {pokemon.stats[1].base_stat}</p>
                    <p>Defense {pokemon.stats[2].base_stat}</p>
                    <p>Sp. Attack {pokemon.stats[3].base_stat}</p>
                    <p>Sp. Defense {pokemon.stats[4].base_stat}</p>
                    <p>Speed {pokemon.stats[5].base_stat}</p>
                </>
            )}
        </section>
    )
}
