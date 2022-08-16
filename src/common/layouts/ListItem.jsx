import React from 'react'
import handleName from '../../utils/handleName'

export default function ListItem({name, handleClick}) {
    return (
        <li onClick={()=>handleClick(name)}>
            {handleName(name)}
        </li>
    )
}
