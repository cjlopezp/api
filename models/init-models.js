var DataTypes = require("sequelize").DataTypes;
var _PaymentMethod = require("./payment-method");
var _ProductCategory = require("./product-category");
var _Tax = require("./tax");

function initModels(sequelize) {
        var PaymentMethod = _PaymentMethod(sequelize, DataTypes);
    var ProductCategory = _ProductCategory(sequelize, DataTypes);
        var Tax = _Tax(sequelize, DataTypes);


    return {
        PaymentMethod,
        ProductCategory,
        Tax,
    };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
