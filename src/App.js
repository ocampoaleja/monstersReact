import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component'

import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchfield: '',
      title:'Monster Rolodex'
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters:users}));
  }


  render() {
    const { monsters,searchfield } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchfield.toLowerCase())
    );
  

    return(
      <div className="App">
        <h1 className='title'>{this.state.title}</h1>
        <SearchBox 
          placeholder="search monsters"
          handleChange={e =>{ this.setState({
            searchfield:e.target.value})
            console.log(this.state)
          }}/>
        <CardList monsters= {filteredMonsters} />
      </div>
    )
  }
}

export default App;
