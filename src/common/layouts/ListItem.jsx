import React from 'react'

export default function ListItem({name, handleClick}) {
    return (
        <li onClick={()=>handleClick(name)}>
            {name}
        </li>
    )
}
