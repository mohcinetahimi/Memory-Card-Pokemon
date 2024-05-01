import React from 'react';
import { useState } from 'react';
import styled, {keyframes} from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

// Styled component for the card container
const CardContainer = styled.div`
  position:relative;
  background-color: #fef;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: transform 2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Overlay = styled.div`
  position: absolute;
  border-radius: 10px;
  background-color : black;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1; /* Set the z-index higher than other elements */
  animation: ${fadeIn} 2s forwards;
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
      <Overlay></Overlay>
      <CardTitle>{pokemon.name}</CardTitle>
      <CardImage src={pokemon.sprites.front_default} alt={pokemon.name} />
      {/* Add more card details here */}
    </CardContainer>
  );
}

export default Card;
