const db = require("../../models");
const PaymentDetail = db.PaymentDetail;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    if (!req.body.payment_id || !req.body.product_id || !req.body.amount || !req.body.price || !req.body.unit_measurement || !req.body.product_name || !req.body.tax_id) {

        res.status(400).send({
            message: "Faltan campos por rellenar."
        });

        return;
    }

    const paymentDetail = {
    
        payment_id: req.body.payment_id,        
        product_id: req.body.product_id, 
        amount: req.body.amount, 
        price: req.body.price, 
        unit_measurement: req.body.unit_measurement,
        product_name: req.body.product_name, 
        tax_id: req.body.tax_id,
       
    };

    PaymentDetail.create(paymentDetail).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Algún error ha surgido al insertar el dato."
        });
    });
};

exports.findAll = (req, res) => {

    let whereStatement = {};


    if(req.query.payment_id)
        whereStatement.payment_id = {[Op.substring]: req.query.payment_id};

    if(req.query.product_id)
        whereStatement.product_id = {[Op.substring]: req.query.product_id}; 
    
    if(req.query.amount)
        whereStatement.amount = {[Op.substring]: req.query.amount};
    
    if(req.query.price)
        whereStatement.price = {[Op.substring]: req.query.price};
        
    if(req.query.unit_measurement)
        whereStatement.unit_measurement = {[Op.substring]: req.query.unit_measurement};           
         
    if(req.query.product_name)
        whereStatement.product_name = {[Op.substring]: req.query.product_name};    
      
    if(req.query.tax_id)
        whereStatement.tax_id = {[Op.substring]: req.query.tax_id};     
        


    let condition = Object.keys(whereStatement).length > 0 ? {[Op.and]: [whereStatement]} : {};

    PaymentDetail.findAll({ where: condition }).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Algún error ha surgido al recuperar los datos."
        });
    });
};

exports.findOne = (req, res) => {

    const id = req.params.id;

    PaymentDetail.findByPk(id).then(data => {

        if (data) {
            res.status(200).send(data);
        } else {
            res.status(404).send({
                message: `No se puede encontrar el elemento con la id=${id}.`
            });
        }

    }).catch(err => {
        res.status(500).send({
            message: "Algún error ha surgido al recuperar la id=" + id
        });
    });
};

exports.update = (req, res) => {

    const id = req.params.id;

    PaymentDetail.update(req.body, {
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.status(200).send({
                message: "El elemento ha sido actualizado correctamente."
            });
        } else {
            res.status(404).send({
                message: `No se puede actualizar el elemento con la id=${id}. Tal vez no se ha encontrado el elemento o el cuerpo de la petición está vacío.`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Algún error ha surgido al actualiazar la id=" + id
        });
    });
};

exports.delete = (req, res) => {

    const id = req.params.id;

    PaymentDetail.destroy({
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.status(200).send({
                message: "El elemento ha sido borrado correctamente"
            });
        } else {
            res.status(404).send({
                message: `No se puede borrar el elemento con la id=${id}. Tal vez no se ha encontrado el elemento.`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Algún error ha surgido al borrar la id=" + id
        });
    });
};