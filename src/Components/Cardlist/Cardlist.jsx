import React from 'react';

import './Cardlist.css';
import Card from './../Card/Card.jsx'

function Cardlist(props) {
    return (
        <div className='cardlist__cardlist'>
            {props.monsters.map(monster => (
              <Card monster={monster} key={monster.id} />)
            )}
        </div>
    )
}

export default Cardlist