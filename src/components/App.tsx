import React from 'react';
import SearchBar from './SearchBar'
import '../styles/components/App.css';
import {getRepos} from '../services/callToApi';
import { useEffect } from 'react';

function App() {

  useEffect( () =>{
    getRepos();
  }, []);
  return (
    <div className="App">
     <SearchBar></SearchBar>
    </div>
  );
}

export default App;
