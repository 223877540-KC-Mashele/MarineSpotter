import React, { useState } from 'react';

const Settings = () => {
  const [settings, setSettings] = useState({
    username: 'MarineExplorer',
    email: 'user@example.com',
    password: '********',
    accountVisibility: 'public',
    dataSharing: true,
    notifications: {
      comments: true,
      likes: true,
      updates: false,
      frequency: 'daily',
    },
    theme: {
      darkMode: false,
      fontSize: 'medium',
    },
    language: 'English',
    marineFeatures: {
      gridView: true,
      locationAccess: true,
      challenges: true,
    },
    experimentalFeatures: false,
  });

  const handleToggle = (key, section = null) => {
    if (section) {
      setSettings((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [key]: !prev[section][key],
        },
      }));
    } else {
      setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
    }
  };

  const handleInputChange = (key, value, section = null) => {
    if (section) {
      setSettings((prev) => ({
        ...prev,
        [section]: { ...prev[section], [key]: value },
      }));
    } else {
      setSettings((prev) => ({ ...prev, [key]: value }));
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Settings</h2>

      {/* Account Settings */}
      <div style={styles.section}>
        <h3 style={styles.subHeader}>Account Settings</h3>
        <label style={styles.label}>
          Username
          <input
            type="text"
            value={settings.username}
            onChange={(e) => handleInputChange('username', e.target.value)}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Email
          <input
            type="email"
            value={settings.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            style={styles.input}
          />
        </label>
        <button style={styles.dangerButton}>Delete Account</button>
      </div>

      {/* Privacy Settings */}
      <div style={styles.section}>
        <h3 style={styles.subHeader}>Privacy Settings</h3>
        <label style={styles.label}>
          Account Visibility
          <select
            value={settings.accountVisibility}
            onChange={(e) => handleInputChange('accountVisibility', e.target.value)}
            style={styles.select}
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
            <option value="friends">Friends Only</option>
          </select>
        </label>
        <label style={styles.label}>
          Data Sharing
          <input
            type="checkbox"
            checked={settings.dataSharing}
            onChange={() => handleToggle('dataSharing')}
            style={styles.checkbox}
          />
        </label>
      </div>

      {/* Notification Settings */}
      <div style={styles.section}>
        <h3 style={styles.subHeader}>Notification Settings</h3>
        <label style={styles.label}>
          Comments on Posts
          <input
            type="checkbox"
            checked={settings.notifications.comments}
            onChange={() => handleToggle('comments', 'notifications')}
            style={styles.checkbox}
          />
        </label>
        <label style={styles.label}>
          Notification Frequency
          <select
            value={settings.notifications.frequency}
            onChange={(e) =>
              handleInputChange('frequency', e.target.value, 'notifications')
            }
            style={styles.select}
          >
            <option value="instant">Instantly</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
          </select>
        </label>
      </div>

      {/* Theme Customization */}
      <div style={styles.section}>
        <h3 style={styles.subHeader}>Theme Customization</h3>
        <label style={styles.label}>
          Dark Mode
          <input
            type="checkbox"
            checked={settings.theme.darkMode}
            onChange={() => handleToggle('darkMode', 'theme')}
            style={styles.checkbox}
          />
        </label>
        <label style={styles.label}>
          Font Size
          <select
            value={settings.theme.fontSize}
            onChange={(e) => handleInputChange('fontSize', e.target.value, 'theme')}
            style={styles.select}
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
      </div>

      {/* MarineSpotter-Specific Features */}
      <div style={styles.section}>
        <h3 style={styles.subHeader}>MarineSpotter Features</h3>
        <label style={styles.label}>
          Grid View
          <input
            type="checkbox"
            checked={settings.marineFeatures.gridView}
            onChange={() => handleToggle('gridView', 'marineFeatures')}
            style={styles.checkbox}
          />
        </label>
      </div>

      {/* Advanced Settings */}
      <div style={styles.section}>
        <h3 style={styles.subHeader}>Advanced Settings</h3>
        <button style={styles.saveButton}>Clear Cache</button>
        <label style={styles.label}>
          Experimental Features
          <input
            type="checkbox"
            checked={settings.experimentalFeatures}
            onChange={() => handleToggle('experimentalFeatures')}
            style={styles.checkbox}
          />
        </label>
      </div>

      {/* Save Button */}
      <button style={styles.saveButton}>Save All Changes</button>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '600px',
    margin: '20px auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    
  },
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  subHeader: {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '10px',
    color: '#555',
  },
  section: {
    marginBottom: '20px',
    padding: '15px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  label: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
    fontSize: '16px',
    fontWeight: '500',
    color: '#333',
  },
  input: {
    width: '60%',
    padding: '5px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  select: {
    width: '60%',
    padding: '5px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  checkbox: {
    transform: 'scale(1.2)',
    cursor: 'pointer',
  },
  saveButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'background-color 0.3s ease',
  },
  dangerButton: {
    backgroundColor: '#ff4d4d',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '10px',
    cursor: 'pointer',
    fontWeight: 'bold',
    marginTop: '10px',
  },
};

export default Settings;
