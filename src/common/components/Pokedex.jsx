import React, {useState} from 'react'
import List from '../layouts/List'
import ListItem from '../layouts/ListItem'
import { usePageContext } from '../../context/PaginatorContext'
import Pokemon from './Pokemon'

export default function Pokedex(props) {
    const {pokemons, isLoading, currentPage, previousPage, nextPage} = usePageContext();
    const [currentPokemon, setCurrentPokemon] = useState('bulbasaur');

    function handlePokemon(name){
        setCurrentPokemon(name)
    }

    return (
        <main>
            <List>
                {isLoading ? 'loading' : pokemons.results.map((pokemon) => (
                    <ListItem 
                        handleClick={handlePokemon}
                        name={pokemon.name}
                        url={pokemon.url}
                        key={pokemon.name}
                    />
                ))}
            </List>

            <Pokemon
                name={currentPokemon}
            />
            <button onClick={previousPage}>previous page</button>
            <h2>{currentPage+1}</h2>
            <button onClick={nextPage}>next page</button>
        </main>
    )
}
