const db = require("../../models");
const Payment = db.Payment;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    if (!req.body.sale_id || !req.body.client_id || !req.body.payment_method_id || !req.body.reference || !req.body.total_price || !req.body.total_price_base || !req.body.total_price_tax || !req.body.emission_date || !req.body.emission_hour) {

        res.status(400).send({
            message: "Faltan campos por rellenar."
        });

        return;
    }

    const payment = {
        
        sale_id: req.body.sale_id,
        client_id: req.body.client_id,
        payment_method_id: req.body.payment_method_id,
        reference: req.body.reference,
        total_price: req.body.total_price,
        total_price_base: req.body.total_price_base,
        total_price_tax: req.body.total_price_tax,
        emission_date: req.body.emission_date,
        emission_hour: req.body.emission_hour,
        
        
       
    };

    Payment.create(payment).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Algún error ha surgido al insertar el dato."
        });
    });
};

exports.findAll = (req, res) => {

    let whereStatement = {};

    

    if(req.query.sale_id)
        whereStatement.sale_id = {[Op.substring]: req.query.sale_id};

    if(req.query.client_id)
    whereStatement.client_id = {[Op.substring]: req.query.client_id}; 
    
    if(req.query.payment_method_id)
    whereStatement.payment_method_id = {[Op.substring]: req.query.payment_method_id}; 

    if(req.query.reference)
    whereStatement.reference = {[Op.substring]: req.query.reference}; 

    if(req.query.total_price)
    whereStatement.total_price = {[Op.substring]: req.query.total_price};
    
    if(req.query.total_price_base)
    whereStatement.total_price_base = {[Op.substring]: req.query.total_price_base};

    if(req.query.total_price_tax)
    whereStatement.total_price_tax = {[Op.substring]: req.query.total_price_tax};
        
    if(req.query.emission_date)
    whereStatement.emission_date = {[Op.substring]: req.query.emission_date}; 
    
    if(req.query.emission_hour)
    whereStatement.emission_hour = {[Op.substring]: req.query.emission_hour};

    


    let condition = Object.keys(whereStatement).length > 0 ? {[Op.and]: [whereStatement]} : {};

    Payment.findAll({ where: condition }).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Algún error ha surgido al recuperar los datos."
        });
    });
};

exports.findOne = (req, res) => {

    const id = req.params.id;

    Payment.findByPk(id).then(data => {

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

    Payment.update(req.body, {
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

    Payment.destroy({
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