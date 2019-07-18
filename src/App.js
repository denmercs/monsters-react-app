import React, { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  // By doing class you have the access of (state and components)
  // STATE
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox
          placeholder="search monsters"
          handleChange={event =>
            this.setState({ searchField: event.target.value })
          }
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

{
  /* 
  REACT won't allow you to change the state, you need to use the setState so that it will render to the components
*/
}
