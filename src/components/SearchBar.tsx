import '../styles/components/SearchBar.css';

type SearchBarProps = {
    setUserSearch: Function,
    userSearch: string
}

const SearchBar = ({setUserSearch, userSearch}: SearchBarProps) => {
/**
 * Prevents to recharge the page and manages the submit
 * @param event 
 */
    const handleSubmit = (event: any): void => {
        event.preventDefault();
    }
/**
 * Manages the input, sets the user's data on userSearch useState
 * @param event the input data
 */
    const handleInput = (event: any): void => {
        const userSearch: string = event.currentTarget.value;
        setUserSearch(userSearch);
    }

    return(
       <form onSubmit={handleSubmit}>
           <input value={userSearch} onChange={handleInput} type="search" name="search" id="search" placeholder="Find a repository..."/>
       </form>
    )
}

export default SearchBar;