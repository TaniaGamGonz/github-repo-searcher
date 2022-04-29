import { useState, useEffect } from 'react';

//Components
import SearchBar from './SearchBar'
import RepoList from './RepoList'
import UserDetail from './UserDetail';

//Interfaces
import Repo from '../interfaces/RepoInterface';
import User from '../interfaces/UserInterface';
import '../styles/components/App.css';
//Api calls
import {getRepos}  from '../services/getRepos';
import {getUser}  from '../services/getUser';


function App() {
 const [reposList, setReposList] = useState([] as Repo[]);
 const [ userSearch, setUserSearch] = useState('' as string)
 const [ user, setUser ] = useState({} as User)


  useEffect( () =>{
   getRepos(userSearch).then((repos: Repo[]) => setReposList(repos));
  }, [userSearch]);
  getUser('TaniaGamGonz').then((user: User)=> setUser(user))
  return (
    <div className="App">
      <main>
        <section>
        <SearchBar setUserSearch={setUserSearch} userSearch={userSearch}></SearchBar>
        <RepoList reposList={reposList}></RepoList>
        </section>
        <section>
          <UserDetail user={user}></UserDetail>
        </section>
      </main>
    </div>
  );
}

export default App;
