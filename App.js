import SearchBar from "./SearchBar.js";
import FilterBar from "./FilterBar.js";
import BooksList from "./BooksList.js";

state = [


];

class App extends React.Component () {
  render() {
    return (
      <div>
        <p>The App component is working</p>
        <SearchBar/>
        <FilterBar/>
        <BooksList/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('main'));