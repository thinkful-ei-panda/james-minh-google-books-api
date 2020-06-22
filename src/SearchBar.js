import React from 'react';

function SearchBar() {
    console.log('SearchBar component is working');

    return (
        <form className="book-search-form">
            <label className="book-search-label" htmlFor="search">Search:</label>
            <input type="text" name="search" id="search" placeholder="henry"></input>
            
            <input type="submit" value="submit"></input>
        </form>
    )

}




export default SearchBar;
