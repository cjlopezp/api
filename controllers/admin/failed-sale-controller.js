const db = require("../../models");
const Tax = db.Tax;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    if (!req.body.payment_method_id || !req.body.client_id || !req.body.cart_id || !req.body.error_code || !req.body.error_message) {

        res.status(400).send({
            message: "Faltan campos por rellenar."
        });

        return;
    }

    const tax = {
        
        payment_method_id: req.body.payment_method_id, 
        client_id: req.body.client_id,
        cart_id: req.body.cart_id,
        error_code: req.body.error_code, 
        error_message: req.body.error_message,
    };

    Tax.create(tax).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Algún error ha surgido al insertar el dato."
        });
    });
};

exports.findAll = (req, res) => {

    let whereStatement = {};

         
    
    if(req.query.payment_method_id)
        whereStatement.payment_method_id = {[Op.substring]: req.query.payment_method_id};

    if(req.query.client_id)
        whereStatement.client_id = {[Op.substring]: req.query.client_id};

    if(req.query.cart_id)
        whereStatement.cart_id = {[Op.substring]: req.query.cart_id};
    
    if(req.query.error_code)
        whereStatement.error_code = {[Op.substring]: req.query.error_code};
    
    if(req.query.error_message)
        whereStatement.error_message = {[Op.substring]: req.query.error_message};
        
        

    let condition = Object.keys(whereStatement).length > 0 ? {[Op.and]: [whereStatement]} : {};

    Tax.findAll({ where: condition }).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Algún error ha surgido al recuperar los datos."
        });
    });
};

exports.findOne = (req, res) => {

    const id = req.params.id;

    Tax.findByPk(id).then(data => {

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

    Tax.update(req.body, {
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

    Tax.destroy({
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