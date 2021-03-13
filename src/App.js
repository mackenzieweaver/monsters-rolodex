import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }

  // es6 syntax automatically binds the 'this' context to the same as what calls handlechange
  handleChange = (e) => {
	this.setState({searchField: e.target.value});
  }

  render() {
	const { monsters, searchField } = this.state;
	const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
		<SearchBox handleChange={this.handleChange} placeholder="search monsters" />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
