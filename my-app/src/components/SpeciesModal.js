import React from 'react';
import './SpeciesModal.css';

const SpeciesModal = ({ species, onClose }) => (
  <div className="modal-overlay">
    <div className="species-modal">
      <button className="close-button" onClick={onClose}>
        ×
      </button>
      <img src={species.imageUrl} alt={species.name} className="modal-image" />
      <h2>{species.name}</h2>
      <p>
        <strong>Category:</strong> {species.category}
      </p>
      <p>
        <strong>Status:</strong> {species.status}
      </p>
      <p>
        <strong>Geography:</strong> {species.geography}
      </p>
      <p>
        <strong>Facts:</strong> {species.facts}
      </p>
      <h3>Description</h3>
      <p>{species.description}</p>
    </div>
  </div>
);

export default SpeciesModal;
