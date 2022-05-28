const mongoose = require("mongoose");

const PotsSchema = new mongoose.Schema({
  title: String,
  description: String,
});

// const Post = mongoose.model("post", PotsSchema);
// module.exports = Post;
module.exports = mongoose.model("Post", PotsSchema);