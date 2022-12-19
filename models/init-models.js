var DataTypes = require("sequelize").DataTypes;
var _PaymentMethod = require("./payment-method");
var _ProductCategory = require("./product-category");
var _Product = require("./product");
var _Tax = require("./tax");

function initModels(sequelize) {
    var PaymentMethod = _PaymentMethod(sequelize, DataTypes);
    var ProductCategory = _ProductCategory(sequelize, DataTypes);
    var Product = _Product(sequelize, DataTypes);
    var Tax = _Tax(sequelize, DataTypes);

    Product.belongsTo(ProductCategory, { as: "category", foreignKey: "category_id"});
    ProductCategory.hasMany(Product, { as: "products", foreignKey: "category_id"});
    Product.belongsTo(Tax, { as: "tax", foreignKey: "tax_id"});
    Tax.hasMany(Product, { as: "products", foreignKey: "tax_id"});

    return {
        PaymentMethod,
        ProductCategory,
        Product,
        Tax,
    };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
