import React from "react";
import '../styles/components/SearchBar.css';

const SearchBar = () => {
    const handleSubmit = (event: any): void => {
        event.preventDefault();
    }

    return(
       <form onSubmit={handleSubmit}>
           <label htmlFor="search">Search</label>
           <input type="search" name="search" id="search" placeholder="Find a repository..."/>
       </form>
    )
}

export default SearchBar;