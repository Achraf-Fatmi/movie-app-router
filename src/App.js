import {Route,Switch} from 'react-router'
import React, {useState,useEffect} from 'react';
import './App.css';
import  AddMovie  from './components/AddMovie/AddMovie';
import { moviesData } from './components/MoviesData/MoviesData';
import SearchMovie from './components/MoviesData/SearchMovie';
import MoviesListe from './components/MoviesListe/MoviesListe'
import Description from './components/MoviesListe/Description';

function App() {
      const [moviesList, setMoviesListe]= useState (moviesData) ;
      const [searchByTitle, setSearchByTitle]= useState('');
      const [searchByRate, setSearchByRate]= useState(1)
      const addMovie =(x)=>{
        setMoviesListe([...moviesList, x])
        }
  return (
    <div className="App">
    
  <Switch>
   <Route exact path='/'>
          <SearchMovie setSearchByTitle={setSearchByTitle} searchByRate={searchByRate} setSearchByRate={setSearchByRate}/>
      <div className='movie_container'> 
        <MoviesListe moviesList={moviesList} searchByTitle={searchByTitle} searchByRate={searchByRate}/>
      <AddMovie addMovie={addMovie}/>
      </div>
    </Route>
    <Route  path='/description' component={Description}/>
  </Switch>
      
    </div>
  );
}

export default App;
