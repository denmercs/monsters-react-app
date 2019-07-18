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

    // this.handleChange = this.handleChange.bind(this); --> optional
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }));
  }

  /** OPTIONAL BINDING TO THE THIS AT APP */
  // handleChange(event) {
  //   this.setState({ searchField: event.target.value });
  // }

  handleChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
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
