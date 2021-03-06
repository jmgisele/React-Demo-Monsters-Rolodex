import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/cardlist/card-list.component.jsx'
import { SearchBox } from './components/search/search-component.jsx'
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };

  }

  updateState = (values) => {
    this.setState(values);
  }

  async componentDidMount() {
    const users = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
    this.setState({ monsters: users });
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className='App'>
        <h1> Monsters Rolodex </h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}>
        </CardList>
      </div>
    )
  }
}

export default App;