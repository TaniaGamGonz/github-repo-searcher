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
import { getReposByUser } from '../services/getReposByUser';
import {getUser}  from '../services/getUser';


function App() {
 const [reposList, setReposList] = useState([] as Repo[]);
 const [ userSearch, setUserSearch] = useState('' as string);
 const [ user, setUser ] = useState({} as User);



  useEffect( () =>{
    getUser('TaniaGamGonz').then((user: User)=>
      setUser(user))
    getReposByUser(user.name).then((repos: Repo[])=> setReposList(repos))
  }, []);
 

 
  return (
    <div className="App">
      <main>
      <section className='user-info'>
          <UserDetail user={user}></UserDetail>
        </section>
        <section className='repos-info'>
        <SearchBar setUserSearch={setUserSearch} userSearch={userSearch}></SearchBar>
        <RepoList reposList={reposList} userSearch={userSearch}></RepoList>
        </section>
   
      </main>
    </div>
  );
}

export default App;
