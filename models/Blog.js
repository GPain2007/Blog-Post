const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
// create our Post model
class Blog extends Model {}
Blog.findOne({
  where: {
    id: body.post_id,
  },
  attributes: ["id", "post_url", "title", "created_at"],
  include: [
    {
      model: models.Comment,
      attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
      include: {
        model: models.User,
        attributes: ["username"],
      },
    },
  ],
});

// create fields/columns for Post model
Blog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isURL: true,
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Blog;
