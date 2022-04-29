import React from 'react';
import SearchBar from './SearchBar'
import RepoList from './RepoList'
import Repo from '../interfaces/RepoInterface';
import '../styles/components/App.css';
import {getRepos} from '../services/callToApi';
import { useState, useEffect } from 'react';

function App() {
 const [reposList, setReposList] = useState([] as Repo[]);
 const [ userSearch, setUserSearch] = useState('' as string)


  useEffect( () =>{
   getRepos(userSearch).then((repos: Repo[]) => setReposList(repos));
  }, [userSearch]);
  return (
    <div className="App">
     <SearchBar setUserSearch={setUserSearch} userSearch={userSearch}></SearchBar>
    <RepoList reposList={reposList}></RepoList>
    </div>
  );
}

export default App;
