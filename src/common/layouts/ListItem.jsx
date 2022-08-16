import React from 'react'
import handleName from '../../utils/handleName'
import getIdByURL from '../../utils/getIdByURL'
import handleID from '../../utils/handleID'

export default function ListItem({name, url, classes, handleClick}) {
    return (
        <li onClick={()=>handleClick(name)} className='pokedex__list_item'>
            <span className='pokedex__list_item_hash'>#<span className='pokedex__list_item_id'>{handleID(getIdByURL(url))}</span></span> <span className='pokedex__list_item_name'>{handleName(name)}</span>
        </li>
    )
}
