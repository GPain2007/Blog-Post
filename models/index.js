// import all models
const Blog = require("./Blog");
const User = require("./User");
const Comment = require("./Comment");

// create associations
User.hasMany(Blog, {
  foreignKey: "user_id",
});

Blog.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

User.belongsToMany(Blog, {
  //   through: Vote,
  //   as: "voted_posts",

  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Blog.belongsToMany(User, {
  // through: Vote,
  // as: "voted_posts",
  foreignKey: "post_id",
  onDelete: "SET NULL",
});

// Vote.belongsTo(User, {
//   foreignKey: "user_id",
//   onDelete: "SET NULL",
// });

// Vote.belongsTo(Post, {
//   foreignKey: "post_id",
//   onDelete: "SET NULL",
// });

// User.hasMany(Vote, {
//   foreignKey: "user_id",
// });

// Post.hasMany(Vote, {
//   foreignKey: "post_id",
// });

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Comment.belongsTo(Blog, {
  foreignKey: "post_id",
  onDelete: "SET NULL",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Blog.hasMany(Comment, {
  foreignKey: "post_id",
});

module.exports = { User, Blog, Comment };
