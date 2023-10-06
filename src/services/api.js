// src/services/api.js
import axios from 'axios';

const apiUrl = 'https://pokeapi.co/api/v2/pokemon';

export async function fetchRandomPokemon() {
  try {
    const randomPokemonId = Math.floor(Math.random() * 898) + 1; // There are 898 Pokémon in total.
    const response = await axios.get(`${apiUrl}/${randomPokemonId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
    return null;
  }
}
