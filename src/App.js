import React from 'react';
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import BooksList from "./BooksList";


function App() {
  console.log('App component is working');

  return (
    <main className='App'>
      {/* content goes here */}
      <SearchBar/>
      <FilterBar/>
      <BooksList/>
    </main>
  );
}
export default App;



