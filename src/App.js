import React from 'react';
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import BooksList from "./BooksList";

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
export default App;
