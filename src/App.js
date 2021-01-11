import React, { Component } from 'react';

import Cardlist from './Components/Cardlist/Cardlist.jsx'
import Searchbox from './Components/Searchbox/Searchbox.jsx'
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

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state
    const filterMonster = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Searchbox placeholder='Search Monsters' handleChange={this.handleChange}/>       
        <Cardlist monsters={filterMonster} />
      </div>
    );
  }
}

export default App;
