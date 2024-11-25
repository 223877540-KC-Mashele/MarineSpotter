import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = ({ onLogout }) => {
  // Mock user data, in a real app this would be fetched from an API or context
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Marine biologist passionate about ocean conservation.',
    profilePicture: 'https://via.placeholder.com/150'
  });

  // Hook for navigation
  const navigate = useNavigate();

  // Handle the edit button click to navigate to the edit profile page
  const handleEdit = () => {
    navigate('/edit-profile');
  };

  // Handle the logout
  const handleLogout = () => {
    onLogout();
    navigate('/'); // Redirect to login page
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>User Profile</h2>
      <div style={styles.details}>
        <img src={user.profilePicture} alt="Profile" style={styles.picture} />
        <div style={styles.info}>
          <h3>{user.name}</h3>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Bio:</strong> {user.bio}
          </p>
        </div>
      </div>
      <button
        style={styles.editButton}
        onMouseOver={(e) => (e.target.style.backgroundColor = styles.editButtonHover.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = styles.editButton.backgroundColor)}
        onClick={handleEdit}
      >
        Edit Profile
      </button>
      <button
        style={styles.logoutButton}
        onMouseOver={(e) => (e.target.style.backgroundColor = styles.logoutButtonHover.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = styles.logoutButton.backgroundColor)}
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    maxWidth: '600px',
    margin: '30px auto',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#0056b3', // Theme color
  },
  details: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '20px',
  },
  picture: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #0056b3',
  },
  info: {
    flexGrow: 1,
  },
  editButton: {
    display: 'block',
    width: '100%',
    padding: '10px',
    backgroundColor: '#0056b3',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'background-color 0.3s ease',
  },
  editButtonHover: {
    backgroundColor: '#004494',
  },
  logoutButton: {
    display: 'block',
    width: '100%',
    padding: '10px',
    backgroundColor: '#d9534f', // Red background for logout
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'background-color 0.3s ease',
    marginTop: '10px',
  },
  logoutButtonHover: {
    backgroundColor: '#c9302c',
  },
};

export default Profile;
