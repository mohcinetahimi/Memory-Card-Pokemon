import React, { useEffect, useState } from 'react';
import Card from './Card';
import { fetchRandomPokemon } from '../services/api';
import styled from 'styled-components';

const CardListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const Score = styled.div`
  font-size: 14px;
  margin-bottom: 20px;
`;

const GameOverMessage = styled.div`
  font-size: 26px;
  text-align: center;
  margin-top: 100px; /* Adjust this value to center the message vertically */
`;

function CardList() {
  const [pokemonArray, setPokemonArray] = useState([]);
  const [clickedCards, setClickedCards] = useState(new Set());
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);
  const [totalRounds, setTotalRounds] = useState(0);
  const [gameInProgress, setGameInProgress] = useState(true);


  useEffect(() => {
    const fetchRandomCards = async () => {
      const randomCards = [];
      for (let i = 0; i < 6; i++) {
        const pokemonData = await fetchRandomPokemon();
        if (pokemonData) {
          randomCards.push({ ...pokemonData, id: i }); // Adding a unique ID to each card
        }
      }
      setPokemonArray(randomCards);
    };

    fetchRandomCards();
  }, [round,gameInProgress]);

  const shuffleArray = (array) => {
    // Create a copy of the array
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // Swap elements at i and j
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const handleCardClick = (cardId) => {
    // Shuffle the array and set it as the new pokemonArray
    const shuffledArray = shuffleArray(pokemonArray);
    setPokemonArray(shuffledArray);
    if (clickedCards.has(cardId)) {
      // Lose condition: Reset the game
      setClickedCards(new Set());
      setScore(0);
      setGameInProgress(false);
    } else {
      const newClickedCards = new Set(clickedCards);
      newClickedCards.add(cardId);
      setClickedCards(newClickedCards);
      setScore(score + 1);
  
      // Check for win condition and start a new round
      if (newClickedCards.size === pokemonArray.length) {
        // Win condition: Start a new round
        setRound(round + 1);
        setTotalRounds(totalRounds + 1);
        setClickedCards(new Set());
      }
    }
  };

 

  return (
    <div>
      
      {gameInProgress ? (
        <>
        <Score>Score: {score}</Score>
        <Score> Round: {round} / Total Rounds: {totalRounds} </Score>
        <CardListContainer>
        {pokemonArray.map((pokemon, index) => (
          <Card key={`${pokemon.id}-${score}`} pokemon={pokemon} onCardClick={handleCardClick} />
        ))}
        </CardListContainer> 
        </>) : ( <>
          <GameOverMessage>Game Over - Total Rounds Played: {totalRounds}</GameOverMessage>
        </>)}
      
      
    </div>
  );
}

export default CardList;