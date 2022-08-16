import React from 'react'
import handleName from '../../utils/handleName'
import getIdByURL from '../../utils/getIdByURL'
import handleID from '../../utils/handleID'

export default function ListItem({name, url, handleClick}) {
    return (
        <li onClick={()=>handleClick(name)}>
            {handleID(getIdByURL(url))} {handleName(name)}
        </li>
    )
}
