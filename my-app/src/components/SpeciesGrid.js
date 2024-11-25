import React, { useState } from 'react';
import SpeciesCard from './SpeciesCard';
import SpeciesModal from './SpeciesModal.js';
import './SpeciesGrid.css';

const SpeciesGrid = ({ speciesList }) => {
  const [selectedSpecies, setSelectedSpecies] = useState(null);

  const handleCardClick = (species) => {
    setSelectedSpecies(species);
  };

  const closeModal = () => {
    setSelectedSpecies(null);
  };

  return (
    <div className="species-grid">
      {speciesList.map((species) => (
        <SpeciesCard
          key={species.name}
          species={species}
          onCardClick={handleCardClick}
        />
      ))}

      {selectedSpecies && (
        <SpeciesModal species={selectedSpecies} onClose={closeModal} />
      )}
    </div>
  );
};

export default SpeciesGrid;
