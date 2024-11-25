import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve the post data from location state
  const post = location.state?.post;

  // Initialize state hooks (these will always be called, even if post is null initially)
  const [postTitle, setPostTitle] = useState('');
  const [postDescription, setPostDescription] = useState('');
  const [postImage, setPostImage] = useState(null);
  const [postImagePreview, setPostImagePreview] = useState('');

  useEffect(() => {
    if (post) {
      setPostTitle(post.title || '');
      setPostDescription(post.description || '');
      setPostImage(post.image || null);
      setPostImagePreview(post.image || '');
    }
  }, [post]);
  
  // Check if the post data is correctly received
  console.log('Received post in EditPost:', post);
  

  // If no post data is passed, we show an error message
  if (!post) {
    return <p>Post not found</p>;
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPostImage(file);
        setPostImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    let imageUrl = postImagePreview;

    if (postImage && postImage instanceof File) {
      const formData = new FormData();
      formData.append('image', postImage);

      const response = await fetch('your-image-upload-endpoint', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        imageUrl = data.imageUrl;
      } else {
        console.error('Image upload failed');
        return;
      }
    }

    const updatedPost = {
      id,
      title: postTitle,
      description: postDescription,
      image: imageUrl,
      time: 'November 19, 2024',
      username: post.username,
    };

    console.log('Updated Post:', updatedPost);
    navigate(`/post/${id}`, { state: { post: updatedPost } });
  };

  return (
    <div style={styles.container}>
      <button onClick={() => navigate(-1)} style={styles.backButton}>
        &larr; Back
      </button>
      <h1>Edit Post</h1>

      <input
        type="text"
        placeholder="Post Title"
        style={styles.inputField}
        value={postTitle}
        onChange={(e) => setPostTitle(e.target.value)}
      />

      <textarea
        placeholder="Post Description"
        style={styles.textArea}
        value={postDescription}
        onChange={(e) => setPostDescription(e.target.value)}
      />

      <div>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={styles.fileInput}
        />
        {postImagePreview && (
          <div>
            <img
              src={postImagePreview}
              alt="Preview"
              style={styles.imagePreview}
            />
          </div>
        )}
      </div>

      <div style={styles.buttonsContainer}>
        <button style={styles.submitButton} onClick={handleSubmit}>
          Save Changes
        </button>
        <button
          style={styles.cancelButton}
          onClick={() => navigate(`/post/${id}`, { state: { post } })}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
  },
  inputField: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #1f53d5',
    fontSize: '16px',
    color: 'black',
    font: 'Arial',
  },
  textArea: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #1f53d5',
    fontSize: '16px',
    color: 'black',
    font: 'Arial',
  },
  fileInput: {
    marginBottom: '10px',
  },
  imagePreview: {
    maxWidth: '100%',
    maxHeight: '400px',
    marginTop: '10px',
  },
  buttonsContainer: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  submitButton: {
    backgroundColor: '#28a745',
    border: 'none',
    color: 'white',
    borderRadius: '5px',
    padding: '10px 15px',
    cursor: 'pointer',
  },
  cancelButton: {
    backgroundColor: '#dc3545',
    border: 'none',
    color: 'white',
    borderRadius: '5px',
    padding: '10px 15px',
    cursor: 'pointer',
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
  },
};

export default EditPost;
