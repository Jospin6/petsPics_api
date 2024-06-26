'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.hasMany(models.Like, {
        as: 'likes',
        onDelete: 'CASCADE'
      })
      Post.hasMany(models.Image, {
        as: 'image',
        onDelete: 'CASCADE'
      })
    }
  }
  Post.init({
    user_id: DataTypes.INTEGER,
    pet_id: DataTypes.INTEGER,
    content: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};