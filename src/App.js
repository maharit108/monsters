import React, { Component } from 'react';

import Cardlist from './Components/Cardlist/Cardlist.jsx'
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => (this.setState({ monsters: users })))
      .catch(console.error)
  }

  render() {
    const { monsters, searchField } = this.state
    const filterMonster = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <input type='search' placeholder='Search Monsters' onChange={e => this.setState({ searchField: e.target.value })} />
        <Cardlist monsters={filterMonster} />
      </div>
    );
  }
}

export default App;
