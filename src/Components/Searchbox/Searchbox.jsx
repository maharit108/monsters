import React from 'react'

import './Searchbox.css'

function Searchbox({ placeholder, handleChange}) {
    return (
          <input className='searchbox__search' type='search' placeholder={placeholder} onChange={handleChange} />  
    )
}

export default Searchbox
