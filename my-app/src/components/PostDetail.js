import React, { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const post = location.state?.post || {
    postTitle: 'Sample Post Title',
    postText: 'Detailed post description goes here.',
    image: 'https://via.placeholder.com/150',
    time: 'November 19, 2024',
    username: 'John Doe',
  };

  const currentUser = 'John Doe'; // Simulate logged-in user

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDelete = () => {
    // Logic for deleting the post (e.g., remove from state or API)
    console.log('Post deleted');
    navigate('/'); // Redirect after deletion
  };

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true); // Open delete confirmation modal
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false); // Close delete modal
  };

  return (
    <div style={styles.container}>
      <button onClick={() => navigate(-1)} style={styles.backButton}>
        &larr; Back
      </button>
      <h1>{post.postTitle}</h1>
      <img src={post.image} alt={post.postTitle} style={styles.image} />
      <p>{post.postText}</p>
      <p>Posted on: {post.time}</p>

      {post.username === currentUser && (
        <div style={styles.buttonsContainer}>
          <button
  style={styles.editButton}
  onClick={() => navigate(`/edit-post/${id}`, { state: { post } })}
>
  Edit
</button>

          <button style={styles.deleteButton} onClick={openDeleteModal}>
            Delete
          </button>
        </div>
      )}

      {isDeleteModalOpen && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <h2>Are you sure you want to delete this post?</h2>
            <div style={styles.modalActions}>
              <button style={styles.submitButton} onClick={handleDelete}>
                Yes, Delete
              </button>
              <button style={styles.cancelButton} onClick={closeDeleteModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  backButton: {
    padding: '12px 25px',
    backgroundColor: '#1f53d5',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '20px',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  },
  buttonsContainer: {
    marginTop: '20px',
  },
  editButton: {
    padding: '10px 20px',
    backgroundColor: '#ffc107',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px',
  },
  deleteButton: {
    padding: '10px 20px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    width: '400px',
    textAlign: 'center',
  },
  modalActions: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  submitButton: {
    backgroundColor: '#dc3545',
    border: 'none',
    color: 'white',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
  },
  cancelButton: {
    backgroundColor: '#6c757d',
    border: 'none',
    color: 'white',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
  },
};

export default PostDetail;
