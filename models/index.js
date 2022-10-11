// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {
  foreignKey: 'driver_id',
});

Category.hasMany(Product, {
  foreignKey: 'driver_id',
  onDelete: 'CASCADE',
});

Tag.belongsToMany(Product, {
  foreignKey: 'driver_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
