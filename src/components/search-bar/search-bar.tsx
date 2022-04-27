import React from "react";
import './search-bar.css';

const searchBar = () => {
    const handleSubmit = (event: any) => {
        event.preventDefault();
    }

    return(
       <form onSubmit={handleSubmit}>
           <label htmlFor="search">Search</label>
           <input type="search" name="search" id="search" placeholder="Find a repository..."/>
       </form>
    )
}

export default searchBar;