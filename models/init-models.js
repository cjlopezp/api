var DataTypes = require("sequelize").DataTypes;
var _Cart = require("./cart");
var _Client = require("./client");
var _Contact = require("./contact");
var _Fingerprint = require("./fingerprint");
var _PaymentMethod = require("./payment-method");
var _ProductCategory = require("./product-category");
var _Product = require("./product");
var _Tax = require("./tax");

function initModels(sequelize) {
    var Cart = _Cart(sequelize, DataTypes);
    var Client = _Client(sequelize, DataTypes);
    var Contact = _Contact(sequelize, DataTypes);
    var Fingerprint = _Fingerprint(sequelize, DataTypes);
    var PaymentMethod = _PaymentMethod(sequelize, DataTypes);
    var ProductCategory = _ProductCategory(sequelize, DataTypes);
    var Product = _Product(sequelize, DataTypes);
    var Tax = _Tax(sequelize, DataTypes);

    Cart.belongsTo(Client, { as: "client", foreignKey: "client_id"});
    Client.hasMany(Cart, { as: "carts", foreignKey: "client_id"});
    Fingerprint.belongsTo(Client, { as: "client", foreignKey: "client_id"});
    Client.hasMany(Fingerprint, { as: "fingerprints", foreignKey: "client_id"});
    Cart.belongsTo(Fingerprint, { as: "fingerprint", foreignKey: "fingerprint_id"});
    Fingerprint.hasMany(Cart, { as: "carts", foreignKey: "fingerprint_id"});
    Contact.belongsTo(Fingerprint, { as: "fingerprint", foreignKey: "fingerprint_id"});
    Fingerprint.hasMany(Contact, { as: "contacts", foreignKey: "fingerprint_id"});
    Product.belongsTo(ProductCategory, { as: "category", foreignKey: "category_id"});
    ProductCategory.hasMany(Product, { as: "products", foreignKey: "category_id"});
    Product.belongsTo(Tax, { as: "tax", foreignKey: "tax_id"});
    Tax.hasMany(Product, { as: "products", foreignKey: "tax_id"});

    return {
        Cart,
        Client,
        Contact,
        Fingerprint,
        PaymentMethod,
        ProductCategory,
        Product,
        Tax,
    };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
