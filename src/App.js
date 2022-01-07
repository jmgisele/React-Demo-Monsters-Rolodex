import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/cardlist/card-list.component.jsx'
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    };
  }
  render() {
    return (
      <div className='App'>
        <CardList>
          {
            this.state.monsters.map(monster => <h2 key={monster.id}>{monster.name}</h2>)
          }
        </CardList>

      </div>
    )
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }))
  }
}

export default App;