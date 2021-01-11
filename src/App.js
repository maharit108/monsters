import React, { Component } from 'react';

import Cardlist from './Components/Cardlist/Cardlist.jsx'
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: []
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
        <Cardlist monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
