import React from 'react'

export default function List({children}) {
    return (
        <ul className='pokedex__list'>
            {children}
        </ul>
        )
}
