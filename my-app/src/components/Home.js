// src/components/Home.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bannerIcon from '../assets/banner-icon.jpg'; // Example image
import { FaAlignJustify } from 'react-icons/fa';
import { LuSendHorizonal } from 'react-icons/lu';
import { MdOutlineCancel } from 'react-icons/md';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostText, setNewPostText] = useState('');
  const [newPostImage, setNewPostImage] = useState(null);
  const [newPostImagePreview, setNewPostImagePreview] = useState('');
  const navigate = useNavigate();

  const handleCreatePost = async () => {
    if (newPostTitle.trim() && newPostText.trim()) {
      const formData = new FormData();
      formData.append('username', 'John Doe');
      formData.append('location', 'New York, USA');
      formData.append('postTitle', newPostTitle);
      formData.append('postText', newPostText);
      if (newPostImage) {
        formData.append('image', newPostImage);
      }

      try {
        const response = await fetch('http://localhost:5000/api/posts', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const createdPost = await response.json();
          setPosts([...posts, createdPost]);  // Add new post to the state
          setNewPostTitle('');
          setNewPostText('');
          setNewPostImage(null);
          setNewPostImagePreview('');
          setIsModalOpen(false);
        } else {
          console.error('Error creating post');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewPostImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewPostImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePostClick = (index) => {
    navigate(`/post/${index}`, { state: { post: posts[index] } });
  };

  return (
    <div style={styles.container}>
      <div style={styles.topSection}>
        <div style={styles.welcomeContainer}>
          <h2>Welcome, John Doe</h2>
        </div>
      </div>

      <div style={styles.bannerSection}>
        <div style={styles.bannerContent}>
          <h3>Explore Species</h3>
          <p>
            Discover a wide variety of amazing species from around the world.
            Learn more about their habitats, characteristics, and more.
          </p>
          <button style={styles.bannerButton}>Learn More</button>
        </div>
        <div style={styles.bannerImage}>
          <img src={bannerIcon} alt="Explore Species" style={styles.image} />
        </div>
      </div>

      <div style={styles.newsFeed}>
        <h3 style={styles.newsFeedText}>News Feed</h3>
      </div>

      <div style={styles.createPostButtonContainer}>
        <button
          style={styles.createPostButton}
          onClick={() => setIsModalOpen(true)}
        >
          Create Post
        </button>
      </div>

      {isModalOpen && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <h2 style={styles.modalTitle}>Add Post</h2>
            <input
              type="text"
              placeholder="Post Title"
              style={styles.inputField}
              value={newPostTitle}
              onChange={(e) => setNewPostTitle(e.target.value)}
            />
            <textarea
              placeholder="Write something..."
              style={styles.textArea}
              value={newPostText}
              onChange={(e) => setNewPostText(e.target.value)}
            />
            <div style={styles.uploadBox}>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={styles.hiddenFileInput}
                id="file-upload"
              />
              <label htmlFor="file-upload" style={styles.uploadLabel}>
                <FaAlignJustify size={20} color="#1f53d5" />
                <span style={styles.uploadText}>Upload an Image</span>
              </label>
            </div>

            {newPostImagePreview && (
              <img
                src={newPostImagePreview}
                alt="Preview"
                style={styles.imagePreview}
              />
            )}

            <div style={styles.modalActions}>
              <button style={styles.submitButton} onClick={handleCreatePost}>
                <LuSendHorizonal size={30} color="#007bff" />
              </button>
              <button
                style={styles.cancelButton}
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div style={styles.cardSection}>
        {posts.length === 0 ? (
          <p>No posts yet. Create a post to start.</p>
        ) : (
          posts.map((post, index) => (
            <div
              key={index}
              style={styles.card}
              onClick={() => handlePostClick(index)}
            >
              <div style={styles.userInfo}>
                <div style={styles.avatar}>
                  <span style={styles.avatarText}>JD</span>
                </div>
                <div style={styles.userDetails}>
                  <h4 style={styles.username}>{post.username}</h4>
                  <p style={styles.location}>{post.location}</p>
                </div>
              </div>

              <h3 style={styles.cardTitle}>{post.postTitle}</h3>
              <p style={styles.cardText}>{post.postText}</p>
              {post.image && <img src={post.image} alt="Post" style={styles.cardImage} />}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
  },
  topSection: {
    textAlign: 'center',
  },
  welcomeContainer: {
    padding: '20px',
  },
  bannerSection: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: '#f4f4f4',
  },
  bannerContent: {
    maxWidth: '60%',
  },
  bannerButton: {
    backgroundColor: '#1f53d5',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
  },
  bannerImage: {
    maxWidth: '35%',
  },
  newsFeed: {
    padding: '20px 0',
  },
  createPostButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  createPostButton: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '15px 30px',
    border: 'none',
    borderRadius: '5px',
  },
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    width: '50%',
    textAlign: 'center',
  },
  modalTitle: {
    marginBottom: '20px',
  },
  inputField: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  textArea: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    height: '100px',
  },
  uploadBox: {
    textAlign: 'center',
    marginBottom: '10px',
  },
  hiddenFileInput: {
    display: 'none',
  },
  uploadLabel: {
    cursor: 'pointer',
  },
  uploadText: {
    marginLeft: '10px',
    fontSize: '16px',
  },
  imagePreview: {
    marginTop: '10px',
    width: '100%',
    height: 'auto',
    borderRadius: '5px',
  },
  modalActions: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  submitButton: {
    backgroundColor: '#28a745',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  cancelButton: {
    backgroundColor: '#dc3545',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  cardSection: {
    marginTop: '30px',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '20px',
    marginBottom: '20px',
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  cardText: {
    fontSize: '16px',
    color: '#555',
  },
  cardImage: {
    width: '100%',
    marginTop: '10px',
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  avatar: {
    backgroundColor: '#007bff',
    color: 'white',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '10px',
  },
  avatarText: {
    fontSize: '18px',
  },
  userDetails: {
    display: 'flex',
    flexDirection: 'column',
  },
  username: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  location: {
    fontSize: '14px',
    color: '#777',
  },
};

export default Home;
