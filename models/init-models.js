var DataTypes = require("sequelize").DataTypes;
var _CartDetails = require("./cart-details");
var _Carts = require("./carts");
var _Clients = require("./clients");
var _Companies = require("./companies");
var _ConfigurationImages = require("./configuration-images");
var _Contacts = require("./contacts");
var _FailedSales = require("./failed-sales");
var _Faqs = require("./faqs");
var _FaqsCategories = require("./faqs-categories");
var _Fingerprints = require("./fingerprints");
var _Languages = require("./languages");
var _Locales = require("./locales");
var _OriginalImages = require("./original-images");
var _PaymentDetails = require("./payment-details");
var _PaymentMethods = require("./payment-methods");
var _Payments = require("./payments");
var _ProductCategories = require("./product-categories");
var _Products = require("./products");
var _ResizedImages = require("./resized-images");
var _Sales = require("./sales");
var _Sliders = require("./sliders");
var _Taxes = require("./taxes");
var _Users = require("./users");

function initModels(sequelize) {
    var CartDetails = _CartDetails(sequelize, DataTypes);
    var Carts = _Carts(sequelize, DataTypes);
    var Clients = _Clients(sequelize, DataTypes);
    var Companies = _Companies(sequelize, DataTypes);
    var ConfigurationImages = _ConfigurationImages(sequelize, DataTypes);
    var Contacts = _Contacts(sequelize, DataTypes);
    var FailedSales = _FailedSales(sequelize, DataTypes);
    var Faqs = _Faqs(sequelize, DataTypes);
    var FaqsCategories = _FaqsCategories(sequelize, DataTypes);
    var Fingerprints = _Fingerprints(sequelize, DataTypes);
    var Languages = _Languages(sequelize, DataTypes);
    var Locales = _Locales(sequelize, DataTypes);
    var OriginalImages = _OriginalImages(sequelize, DataTypes);
    var PaymentDetails = _PaymentDetails(sequelize, DataTypes);
    var PaymentMethods = _PaymentMethods(sequelize, DataTypes);
    var Payments = _Payments(sequelize, DataTypes);
    var ProductCategories = _ProductCategories(sequelize, DataTypes);
    var Products = _Products(sequelize, DataTypes);
    var ResizedImages = _ResizedImages(sequelize, DataTypes);
    var Sales = _Sales(sequelize, DataTypes);
    var Sliders = _Sliders(sequelize, DataTypes);
    var Taxes = _Taxes(sequelize, DataTypes);
    var Users = _Users(sequelize, DataTypes);

    CartDetails.belongsTo(Carts, { as: "cart", foreignKey: "cart_id"});
    Carts.hasMany(CartDetails, { as: "cart_details", foreignKey: "cart_id"});
    FailedSales.belongsTo(Carts, { as: "cart", foreignKey: "cart_id"});
    Carts.hasMany(FailedSales, { as: "failed_sales", foreignKey: "cart_id"});
    Sales.belongsTo(Carts, { as: "cart", foreignKey: "cart_id"});
    Carts.hasMany(Sales, { as: "sales", foreignKey: "cart_id"});
    Carts.belongsTo(Clients, { as: "client", foreignKey: "client_id"});
    Clients.hasMany(Carts, { as: "carts", foreignKey: "client_id"});
    FailedSales.belongsTo(Clients, { as: "client", foreignKey: "client_id"});
    Clients.hasMany(FailedSales, { as: "failed_sales", foreignKey: "client_id"});
    Fingerprints.belongsTo(Clients, { as: "client", foreignKey: "client_id"});
    Clients.hasMany(Fingerprints, { as: "fingerprints", foreignKey: "client_id"});
    Payments.belongsTo(Clients, { as: "client", foreignKey: "client_id"});
    Clients.hasMany(Payments, { as: "payments", foreignKey: "client_id"});
    Sales.belongsTo(Clients, { as: "client", foreignKey: "client_id"});
    Clients.hasMany(Sales, { as: "sales", foreignKey: "client_id"});
    Carts.belongsTo(Fingerprints, { as: "fingerprint", foreignKey: "fingerprint_id"});
    Fingerprints.hasMany(Carts, { as: "carts", foreignKey: "fingerprint_id"});
    Locales.belongsTo(Languages, { as: "language_alias_language", foreignKey: "language_alias"});
    Languages.hasMany(Locales, { as: "locales", foreignKey: "language_alias"});
    OriginalImages.belongsTo(Languages, { as: "language_alias_language", foreignKey: "language_alias"});
    Languages.hasMany(OriginalImages, { as: "original_images", foreignKey: "language_alias"});
    ResizedImages.belongsTo(Languages, { as: "language_alias_language", foreignKey: "language_alias"});
    Languages.hasMany(ResizedImages, { as: "resized_images", foreignKey: "language_alias"});
    PaymentDetails.belongsTo(PaymentDetails, { as: "payment", foreignKey: "payment_id"});
    PaymentDetails.hasMany(PaymentDetails, { as: "payment_details", foreignKey: "payment_id"});
    FailedSales.belongsTo(PaymentMethods, { as: "payment_method", foreignKey: "payment_method_id"});
    PaymentMethods.hasMany(FailedSales, { as: "failed_sales", foreignKey: "payment_method_id"});
    Payments.belongsTo(PaymentMethods, { as: "payment_method", foreignKey: "payment_method_id"});
    PaymentMethods.hasMany(Payments, { as: "payments", foreignKey: "payment_method_id"});
    Sales.belongsTo(PaymentMethods, { as: "payment_method", foreignKey: "payment_method_id"});
    PaymentMethods.hasMany(Sales, { as: "sales", foreignKey: "payment_method_id"});
    Products.belongsTo(ProductCategories, { as: "category", foreignKey: "category_id"});
    ProductCategories.hasMany(Products, { as: "products", foreignKey: "category_id"});
    CartDetails.belongsTo(Products, { as: "product", foreignKey: "product_id"});
    Products.hasMany(CartDetails, { as: "cart_details", foreignKey: "product_id"});
    PaymentDetails.belongsTo(Products, { as: "product", foreignKey: "product_id"});
    Products.hasMany(PaymentDetails, { as: "payment_details", foreignKey: "product_id"});
    Payments.belongsTo(Sales, { as: "sale", foreignKey: "sale_id"});
    Sales.hasMany(Payments, { as: "payments", foreignKey: "sale_id"});
    CartDetails.belongsTo(Taxes, { as: "tax", foreignKey: "tax_id"});
    Taxes.hasMany(CartDetails, { as: "cart_details", foreignKey: "tax_id"});
    PaymentDetails.belongsTo(Taxes, { as: "tax", foreignKey: "tax_id"});
    Taxes.hasMany(PaymentDetails, { as: "payment_details", foreignKey: "tax_id"});
    Products.belongsTo(Taxes, { as: "tax", foreignKey: "tax_id"});
    Taxes.hasMany(Products, { as: "products", foreignKey: "tax_id"});

    return {
        CartDetails,
        Carts,
        Clients,
        Companies,
        ConfigurationImages,
        Contacts,
        FailedSales,
        Faqs,
        FaqsCategories,
        Fingerprints,
        Languages,
        Locales,
        OriginalImages,
        PaymentDetails,
        PaymentMethods,
        Payments,
        ProductCategories,
        Products,
        ResizedImages,
        Sales,
        Sliders,
        Taxes,
        Users,
    };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
