import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { SINGLE_PK_URL } from '../../utils/constants'
import handleName from '../../utils/handleName';
import handleID from '../../utils/handleID';
import Load from '../../assets/img/load.png'

export default function Pokemon({ name }) {
    const { data: pokemon, isLoading } = useFetch(SINGLE_PK_URL(name));
    const [easterEgg, setEasterEgg] = useState(0);

    const typeColor = {
        normal: '#A8A878',
        fire: '#F08030',
        water: '#6890F0',
        grass: '#78C850',
        electric: '#F8D030',
        ice: '#98D8D8',
        fighting: '#C03028',
        poison: '#A040A0',
        ground: '#E0C068',
        flying: '#A890F0',
        psychic: '#F85888',
        bug: '#A8B820',
        rock: '#A8B820',
        ghost: '#705898',
        dragon: '#7038F8',
        dark: '#705848',
        steel: '#B8B8D0',
        fairy: '#FF9BE1'
    }

    const bgColor = {
        normal: '#a8a87881',
        fire: '#f0803083',
        water: '#6891f07f',
        grass: '#78c8507f',
        electric: '#f8d03081',
        ice: '#98d8d87f',
        fighting: '#c030287f',
        poison: '#a040a081',
        ground: '#e0c06886',
        flying: '#a890ff89',
        psychic: '#f8588889',
        bug: '#a9b82089',
        rock: '#a9b82088',
        ghost: '#71589883',
        dragon: '#7238f88d',
        dark: '#70584889',
        steel: '#b8b8d08b',
        fairy: '#ff9be188'
    }

    const statDisplay = {
        hp: 'HP',
        attack: 'Attack',
        defense: 'Defense',
        'special-attack': 'Sp. Attack',
        'special-defense': 'Sp. Defense',
        speed: 'Speed'
    }

    const statColor = {
        hp: '#FF0000',
        attack: '#F08030',
        defense: '#F8D030',
        'special-attack': '#F8D030',
        'special-defense': '#6890F0',
        speed: '#F85888'
    }

    function checkSecondType() {
        if (pokemon.types[1]?.type.name) return true

        return false
    }

    function handleEasterEgg(e) {
        if (name === 'pikachu') {
            setEasterEgg(easterEgg + 1);
            if (easterEgg >= 2) {
                e.target.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg';
            }
        }
    }

    useEffect(() => {
        setEasterEgg(0);
        console.log(pokemon ? true : false)
    }, [pokemon])

    return (
        <section className='pokemon' style={{ backgroundColor: pokemon != undefined ? bgColor[pokemon.types[0].type.name] : '' }}  >
            {isLoading ?
                <div className='load'><img src={Load} alt="spinning pokeball" /></div>
                :
                (
                    <>
                        <div className='pokemon__header'>
                            <p className='pokemon__header_id'>#{handleID(pokemon.id)}</p>
                            <p className='pokemon__header_title'>{handleName(pokemon.name)}</p>
                            <div className='pokemon__header_type'>
                                <div className='pokemon__header_type_name' style={{ backgroundColor: `${typeColor[pokemon.types[0].type.name]}` }}>{handleName(pokemon.types[0].type.name)}</div>
                                {checkSecondType() ?
                                    <div className='pokemon__header_type_name' style={{ backgroundColor: `${typeColor[pokemon.types[1].type.name]}`, marginLeft: '12px' }}>{handleName(pokemon.types[1].type.name)}</div> :
                                    ''}
                            </div>
                        </div>

                        <img src={pokemon.sprites.other['official-artwork'].front_default} alt={`Pokemon ${pokemon.name}'s Official Artwork`} onClick={handleEasterEgg} className='pokemon__img' />

                        <div className="pokemon__stat">
                            {pokemon.stats.map((stat) => {
                                return (
                                    <div className='pokemon__stat_name'>
                                        <div className="pokemon__stat_name_name">
                                            {statDisplay[stat.stat.name]}
                                        </div>
                                        <div className='pokemon__stat_bar'>
                                            <div className='pokemon__stat_bar_overlay' style={{ width: `${stat.base_stat / 2}%`, backgroundColor: statColor[stat.stat.name] }}>
                                            </div>
                                        </div>
                                        <div className='pokemon__stat_number'>
                                            {stat.base_stat}/200
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </>
                )}
        </section>
    )
}
