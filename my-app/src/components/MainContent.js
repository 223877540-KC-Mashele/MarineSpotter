import React from 'react';

const MainContent = ({ activeComponent }) => {
  return (
    <div className="main-content">
      {activeComponent === 'Home' && <h2>Welcome to the Home Page</h2>}
      {activeComponent === 'Profile' && <h2>Your Profile Details</h2>}
      {activeComponent === 'Settings' && <h2>Settings Page</h2>}
    </div>
  );
};

export default MainContent;
