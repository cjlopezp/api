var DataTypes = require("sequelize").DataTypes;
var _Book = require("./book");
var _CartDetail = require("./cart-detail");
var _Cart = require("./cart");
var _Client = require("./client");
var _Company = require("./company");
var _Contact = require("./contact");
var _Email = require("./email");
var _FailedSale = require("./failed-sale");
var _Faq = require("./faq");
var _FaqsCategory = require("./faqs-category");
var _Fingerprint = require("./fingerprint");
var _ImageConfiguration = require("./image-configuration");
var _Image = require("./image");
var _Language = require("./language");
var _Locale = require("./locale");
var _Menu = require("./menu");
var _PaymentDetail = require("./payment-detail");
var _PaymentMethod = require("./payment-method");
var _Payment = require("./payment");
var _ProductCategory = require("./product-category");
var _Product = require("./product");
var _Sale = require("./sale");
var _Slider = require("./slider");
var _Tax = require("./tax");
var _User = require("./user");

function initModels(sequelize) {
    var Book = _Book(sequelize, DataTypes);
    var CartDetail = _CartDetail(sequelize, DataTypes);
    var Cart = _Cart(sequelize, DataTypes);
    var Client = _Client(sequelize, DataTypes);
    var Company = _Company(sequelize, DataTypes);
    var Contact = _Contact(sequelize, DataTypes);
    var Email = _Email(sequelize, DataTypes);
    var FailedSale = _FailedSale(sequelize, DataTypes);
    var Faq = _Faq(sequelize, DataTypes);
    var FaqsCategory = _FaqsCategory(sequelize, DataTypes);
    var Fingerprint = _Fingerprint(sequelize, DataTypes);
    var ImageConfiguration = _ImageConfiguration(sequelize, DataTypes);
    var Image = _Image(sequelize, DataTypes);
    var Language = _Language(sequelize, DataTypes);
    var Locale = _Locale(sequelize, DataTypes);
    var Menu = _Menu(sequelize, DataTypes);
    var PaymentDetail = _PaymentDetail(sequelize, DataTypes);
    var PaymentMethod = _PaymentMethod(sequelize, DataTypes);
    var Payment = _Payment(sequelize, DataTypes);
    var ProductCategory = _ProductCategory(sequelize, DataTypes);
    var Product = _Product(sequelize, DataTypes);
    var Sale = _Sale(sequelize, DataTypes);
    var Slider = _Slider(sequelize, DataTypes);
    var Tax = _Tax(sequelize, DataTypes);
    var User = _User(sequelize, DataTypes);

    CartDetail.belongsTo(Cart, { as: "cart", foreignKey: "cart_id"});
    Cart.hasMany(CartDetail, { as: "cart_details", foreignKey: "cart_id"});
    FailedSale.belongsTo(Cart, { as: "cart", foreignKey: "cart_id"});
    Cart.hasMany(FailedSale, { as: "failed_sales", foreignKey: "cart_id"});
    Sale.belongsTo(Cart, { as: "cart", foreignKey: "cart_id"});
    Cart.hasMany(Sale, { as: "sales", foreignKey: "cart_id"});
    Cart.belongsTo(Client, { as: "client", foreignKey: "client_id"});
    Client.hasMany(Cart, { as: "carts", foreignKey: "client_id"});
    FailedSale.belongsTo(Client, { as: "client", foreignKey: "client_id"});
    Client.hasMany(FailedSale, { as: "failed_sales", foreignKey: "client_id"});
    Fingerprint.belongsTo(Client, { as: "client", foreignKey: "client_id"});
    Client.hasMany(Fingerprint, { as: "fingerprints", foreignKey: "client_id"});
    Payment.belongsTo(Client, { as: "client", foreignKey: "client_id"});
    Client.hasMany(Payment, { as: "payments", foreignKey: "client_id"});
    Sale.belongsTo(Client, { as: "client", foreignKey: "client_id"});
    Client.hasMany(Sale, { as: "sales", foreignKey: "client_id"});
    Cart.belongsTo(Fingerprint, { as: "fingerprint", foreignKey: "fingerprint_id"});
    Fingerprint.hasMany(Cart, { as: "carts", foreignKey: "fingerprint_id"});
    Locale.belongsTo(Language, { as: "language_alias_language", foreignKey: "language_alias"});
    Language.hasMany(Locale, { as: "locales", foreignKey: "language_alias"});
    PaymentDetail.belongsTo(PaymentDetail, { as: "payment", foreignKey: "payment_id"});
    PaymentDetail.hasMany(PaymentDetail, { as: "payment_details", foreignKey: "payment_id"});
    FailedSale.belongsTo(PaymentMethod, { as: "payment_method", foreignKey: "payment_method_id"});
    PaymentMethod.hasMany(FailedSale, { as: "failed_sales", foreignKey: "payment_method_id"});
    Payment.belongsTo(PaymentMethod, { as: "payment_method", foreignKey: "payment_method_id"});
    PaymentMethod.hasMany(Payment, { as: "payments", foreignKey: "payment_method_id"});
    Sale.belongsTo(PaymentMethod, { as: "payment_method", foreignKey: "payment_method_id"});
    PaymentMethod.hasMany(Sale, { as: "sales", foreignKey: "payment_method_id"});
    Product.belongsTo(ProductCategory, { as: "category", foreignKey: "category_id"});
    ProductCategory.hasMany(Product, { as: "products", foreignKey: "category_id"});
    CartDetail.belongsTo(Product, { as: "product", foreignKey: "product_id"});
    Product.hasMany(CartDetail, { as: "cart_details", foreignKey: "product_id"});
    PaymentDetail.belongsTo(Product, { as: "product", foreignKey: "product_id"});
    Product.hasMany(PaymentDetail, { as: "payment_details", foreignKey: "product_id"});
    Payment.belongsTo(Sale, { as: "sale", foreignKey: "sale_id"});
    Sale.hasMany(Payment, { as: "payments", foreignKey: "sale_id"});
    CartDetail.belongsTo(Tax, { as: "tax", foreignKey: "tax_id"});
    Tax.hasMany(CartDetail, { as: "cart_details", foreignKey: "tax_id"});
    PaymentDetail.belongsTo(Tax, { as: "tax", foreignKey: "tax_id"});
    Tax.hasMany(PaymentDetail, { as: "payment_details", foreignKey: "tax_id"});
    Product.belongsTo(Tax, { as: "tax", foreignKey: "tax_id"});
    Tax.hasMany(Product, { as: "products", foreignKey: "tax_id"});

    return {
        Book,
        CartDetail,
        Cart,
        Client,
        Company,
        Contact,
        Email,
        FailedSale,
        Faq,
        FaqsCategory,
        Fingerprint,
        ImageConfiguration,
        Image,
        Language,
        Locale,
        Menu,
        PaymentDetail,
        PaymentMethod,
        Payment,
        ProductCategory,
        Product,
        Sale,
        Slider,
        Tax,
        User,
    };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
