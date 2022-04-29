import { Method } from '@testing-library/react';
import '../styles/components/SearchBar.css';

type SearchBarProps = {
    setUserSearch: Function,
    userSearch: string
}

const SearchBar = ({setUserSearch, userSearch}: SearchBarProps) => {

    const handleSubmit = (event: any): void => {
        event.preventDefault();
    }
    const handleInput = (event: any): void => {
        const userSearch: string = event.currentTarget.value;
        setUserSearch(userSearch);
    }

    return(
       <form onSubmit={handleSubmit}>
           <label htmlFor="search">Search</label>
           <input value={userSearch} onChange={handleInput} type="search" name="search" id="search" placeholder="Type the username to see his repos"/>
       </form>
    )
}

export default SearchBar;