import React from 'react'

import './Card.css'

function Card(props) {
    return (
        <div className='card__container'>
            <h1>{props.monster.name}</h1>
        </div>
    )
}

export default Card
