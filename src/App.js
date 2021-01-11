import React, { Component } from 'react';

import Cardlist from './Components/Cardlist/Cardlist.jsx'
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      seacrhField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => (this.setState({ monsters: users })))
      .catch(console.error)
  }

  render() {
    return (
      <div className="App">
        <input type='search' placeholder='Search Monsters' onChange={e => this.setState({ seacrhField: e.target.value })} />
        <Cardlist monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
