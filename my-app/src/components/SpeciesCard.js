import React from 'react';
import './SpeciesCard.css';

const SpeciesCard = ({ species, onCardClick }) => (
  <div className="species-card" onClick={() => onCardClick(species)}>
    <img src={species.imageUrl} alt={species.name} className="species-image" />
    <h3>{species.name}</h3>
    <p>{species.category}</p>
  </div>
);

export default SpeciesCard;
