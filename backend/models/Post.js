const mongoose = require('mongoose');

// Define the schema for posts
const PostSchema = new mongoose.Schema({
  username: String,
  location: String,
  postTitle: String,
  postText: String,
  time: String,
  image: String,
});

// Export the model
module.exports = mongoose.model('Post', PostSchema);
// models/Post.js
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  username: String,
  location: String,
  postTitle: String,
  postText: String,
  image: String,  // Path to the image uploaded
  createdAt: { type: Date, default: Date.now }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
