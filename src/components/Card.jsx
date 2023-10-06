import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

// Styled component for the card container
const CardContainer = styled.div`
  background-color: #fef;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

// Styled component for the card title
const CardTitle = styled.h2`
  font-size: 14px;
  margin-bottom: 10px;
`;

// Styled component for the card image
const CardImage = styled.img`
  max-width: 100%;
  height: auto;
`;

function Card({ pokemon, onCardClick}) {
  const [isClicked, setIsClicked] = useState(false);

 const handleClick = () => {
  onCardClick(pokemon.id); // Pass the ID of the clicked card to the parent component
    if (!isClicked) {
      setIsClicked(true);
    }
  };

  return (
    <CardContainer onClick={handleClick}>
      <CardTitle>{pokemon.name}</CardTitle>
      <CardImage src={pokemon.sprites.front_default} alt={pokemon.name} />
      {/* Add more card details here */}
    </CardContainer>
  );
}

export default Card;
