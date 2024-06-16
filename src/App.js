import React from 'react';
import CardList from './components/card-lists'
import Search from './components/Search';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monters: [],
      searchedMonster: 'sar',
      bgColor: "red"
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => this.setState({
      monters: data
    }));
  }

 searchFunction= (e) => this.setState({
    searchedMonster: e.target.value
  })
  
// This is the comment to test that new changes is coming or not
  render() {
    const filterMonsters = this.state.monters.filter(monster => monster.name.includes(this.state.searchedMonster))
    return (
      <div className="App" style={{backgroundColor: this.state.bgColor}}>
        <h1>Monsters Rolodex</h1>
        <Search searchFunction={this.searchFunction} />
        <CardList monstersLists = {filterMonsters} />
        <button onClick={() => this.setState({
          bgColor: "green"
        })}>ClickMe</button>
      </div>
    )
  }

}

export default App;
