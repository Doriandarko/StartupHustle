import React, { useState } from 'react';

const characters = [
  {
    name: 'Alex',
    description: 'A software engineer looking to develop a groundbreaking app.',
    image: '/images/alex.png',
  },
  {
    name: 'Brianna',
    description: 'An ambitious entrepreneur seeking to launch an innovative e-commerce platform.',
    image: '/images/brianna.png',
  },
  {
    name: 'Chris',
    description: 'A creative designer striving to revolutionize the UX/UI industry.',
    image: '/images/chris.png',
  },
];

const CharacterSelection = ({ onSelectCharacter }) => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleSelectCharacter = (character) => {
    setSelectedCharacter(character);
    onSelectCharacter(character);
  };

  return (
    <div className="character-selection">
      <h1>Select your character</h1>
      <div className="character-grid">
        {characters.map((character, index) => (
          <div
            key={index}
            className={`character-card ${selectedCharacter === character ? 'selected' : ''}`}
            onClick={() => handleSelectCharacter(character)}
          >
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <p>{character.description}</p>
          </div>
        ))}
      </div>
      <style jsx>{`
        .character-selection {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .character-grid {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
          margin-top: 20px;
        }
        .character-card {
          border: 1px solid #ccc;
          padding: 20px;
          border-radius: 5px;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s;
        }
        .character-card.selected,
        .character-card:hover {
          border-color: #0070f3;
          box-shadow: 0 4px 14px rgba(0, 118, 255, 0.39);
        }
        img {
          width: 150px;
          height: 150px;
          object-fit: cover;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
};

export default CharacterSelection;
