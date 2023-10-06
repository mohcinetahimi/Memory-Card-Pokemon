// src/App.js
import React from 'react';
import CardList from './components/CardList';
import { styled } from 'styled-components';


function App() {
  return (
    <div className="App">
      <div style={{textAlign: 'center'}}> <h1>Random Pokémon Cards</h1> </div>
      <CardList />
      {/* Access the 'pokemonArray' state here or pass it to other components */}
    </div>
  );
}

export default App;
