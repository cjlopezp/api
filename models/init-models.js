var DataTypes = require("sequelize").DataTypes;
var _CartDetails = require("./cart_details");
var _Carts = require("./carts");
var _Clients = require("./clients");
var _Companies = require("./companies");
var _Contacts = require("./contacts");
var _Emails = require("./emails");
var _FailedSales = require("./failed_sales");
var _Faqs = require("./faqs");
var _FaqsCategories = require("./faqs-categories");
var _Fingerprints = require("./fingerprints");
var _ImageConfigurations = require("./image_configurations");
var _ImageOriginals = require("./image_originals");
var _ImageResizes = require("./image_resizes");
var _Languages = require("./languages");
var _Locales = require("./locales");
var _MenuItems = require("./menu_items");
var _Menus = require("./menus");
var _PaymentDetails = require("./payment_details");
var _PaymentMethods = require("./payment_methods");
var _Payments = require("./payments");
var _ProductCategories = require("./product_categories");
var _Products = require("./products");
var _Sales = require("./sales");
var _Sliders = require("./sliders");
var _Taxes = require("./taxes");
var _Users = require("./users");

function initModels(sequelize) {
    var CartDetails = _CartDetails(sequelize, DataTypes);
    var Carts = _Carts(sequelize, DataTypes);
    var Clients = _Clients(sequelize, DataTypes);
    var Companies = _Companies(sequelize, DataTypes);
    var Contacts = _Contacts(sequelize, DataTypes);
    var Emails = _Emails(sequelize, DataTypes);
    var FailedSales = _FailedSales(sequelize, DataTypes);
    var Faqs = _Faqs(sequelize, DataTypes);
    var FaqsCategories = _FaqsCategories(sequelize, DataTypes);
    var Fingerprints = _Fingerprints(sequelize, DataTypes);
    var ImageConfigurations = _ImageConfigurations(sequelize, DataTypes);
    var ImageOriginals = _ImageOriginals(sequelize, DataTypes);
    var ImageResizes = _ImageResizes(sequelize, DataTypes);
    var Languages = _Languages(sequelize, DataTypes);
    var Locales = _Locales(sequelize, DataTypes);
    var MenuItems = _MenuItems(sequelize, DataTypes);
    var Menus = _Menus(sequelize, DataTypes);
    var PaymentDetails = _PaymentDetails(sequelize, DataTypes);
    var PaymentMethods = _PaymentMethods(sequelize, DataTypes);
    var Payments = _Payments(sequelize, DataTypes);
    var ProductCategories = _ProductCategories(sequelize, DataTypes);
    var Products = _Products(sequelize, DataTypes);
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
    MenuItems.belongsTo(MenuItems, { as: "parent", foreignKey: "parentId"});
    MenuItems.hasMany(MenuItems, { as: "menu_items", foreignKey: "parentId"});
    MenuItems.belongsTo(Menus, { as: "menu", foreignKey: "menuId"});
    Menus.hasMany(MenuItems, { as: "menu_items", foreignKey: "menuId"});
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
        Contacts,
        Emails,
        FailedSales,
        Faqs,
        FaqsCategories,
        Fingerprints,
        ImageConfigurations,
        ImageOriginals,
        ImageResizes,
        Languages,
        Locales,
        MenuItems,
        Menus,
        PaymentDetails,
        PaymentMethods,
        Payments,
        ProductCategories,
        Products,
        Sales,
        Sliders,
        Taxes,
        Users,
    };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
