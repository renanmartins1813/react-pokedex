import React, { useState } from 'react'
import List from '../layouts/List'
import ListItem from '../layouts/ListItem'
import { usePageContext } from '../../context/PaginatorContext'
import Pokemon from './Pokemon'
import Load from '../../assets/img/load.png'
import LeftArrow from '../../assets/svg/left-arrow.svg'
import RightArrow from '../../assets/svg/right-arrow.svg'

export default function Pokedex(props) {
    const { pokemons, isLoading, currentPage, previousPage, nextPage } = usePageContext();
    const [currentPokemon, setCurrentPokemon] = useState('regieleki');

    function handlePokemon(name) {
        setCurrentPokemon(name)
    }

    return (
        <main className='app'>
            <section className='pokedex'>
                <header className='pokedex__header'>
                    <h1 className='pokedex__header_title'>Pokedex</h1>
                    <div className='pokedex__header_menu'>
                        <img src={LeftArrow} alt="left arrow" className='pokedex__header_menu-arrow' onClick={previousPage} />
                        <h2 className='pokedex__header_menu_page'>{currentPage + 1}</h2>
                        <img src={RightArrow} alt="right arrow" className='pokedex__header_menu-arrow' onClick={nextPage} />
                    </div>
                </header>
                <List>
                    {isLoading ? 
                        <div className='load'><img src={Load} alt="spinning pokeball" /></div>
                        : 
                        pokemons.results.map((pokemon) => (
                        <ListItem
                            handleClick={handlePokemon}
                            name={pokemon.name}
                            url={pokemon.url}
                            key={pokemon.name}
                        />
                    ))}
                </List>
            </section>

            <Pokemon
                name={currentPokemon}
            />
        </main>
    )
}
