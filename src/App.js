import React from 'react';

import ReactDOM from 'react-dom';


//import {Route, withRouter} from 'react-router-dom';

import './App.css';
//using films swapi api

let baseUrl = 'https://swapi.dev/api/films/1/';

// using the fetch
 fetch(baseUrl).then(response => response.json())
 .then(Json => console.log(Json))

function App() {

  return (
    <div className="App">
    <header className="App-header">    
       <h1 className='title-header'>Star wars</h1>
       <label for="movie" className= 'option'>chose a movie</label>
<select onClick name="movie" className="movie">
  <option value="Clone warsr"  className= 'listOption'>Clone wars</option>
  <option value="Return of the jedi" className= 'listOption'>Return of the jedi</option>
  <option value="The force Awakens"  className= 'listOption'>The force Awaken</option>
  <option value="The last jedi"  className= 'listOption'>The last jedi</option>
  <option value="skywalker"  className= 'listOption'>skywalker</option>
</select>
    </header>


      
    </div>
  );
}

export default App;
