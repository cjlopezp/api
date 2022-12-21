const db = require("../../models");
const Sale = db.Sale;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    if (!req.body.cart_id || !req.body.client_id || !req.body.payment_method_id || !req.body.total_price || !req.body.full_base_price || !req.body.full_tax_price || !req.body.date_issue || !req.body.hour_issue) {

        res.status(400).send({
            message: "Faltan campos por rellenar."
        });

        return;
    }

    const sale = {
        cart_id: req.body.cart_id, 
        client_id: req.body.client_id,
        payment_method_id: req.body.payment_method_id,
        total_price: req.body.total_price, 
        full_base_price: req.body.full_base_price,
        full_tax_price: req.body.full_tax_price, 
        date_issue: req.body.date_issue,
        hour_issue: req.body.hour_issue,
    };

    Sale.create(sale).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Algún error ha surgido al insertar el dato."
        });
    });
};

exports.findAll = (req, res) => {

    let whereStatement = {};

   
        
    if(req.query.cart_id)
        whereStatement.cart_id = {[Op.substring]: req.query.cart_id};

        if(req.query.client_id)
        whereStatement.client_id = {[Op.substring]: req.query.client_id};
         
        if(req.query.payment_method_id)
        whereStatement.payment_method_id = {[Op.substring]: req.query.payment_method_id};
        
        if(req.query.total_price)
        whereStatement.total_price = {[Op.substring]: req.query.total_price};
        
        if(req.query.full_base_price)
        whereStatement.full_base_price = {[Op.substring]: req.query.full_base_price};
        
        if(req.query.full_tax_price)
        whereStatement.full_tax_price = {[Op.substring]: req.query.full_tax_price};
        
        if(req.query.date_issue)
        whereStatement.date_issue = {[Op.substring]: req.query.date_issue};
        
        if(req.query.hour_issue)
        whereStatement.hour_issue = {[Op.substring]: req.query.hour_issue};
        
        




    let condition = Object.keys(whereStatement).length > 0 ? {[Op.and]: [whereStatement]} : {};

    Sale.findAll({ where: condition }).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Algún error ha surgido al recuperar los datos."
        });
    });
};

exports.findOne = (req, res) => {

    const id = req.params.id;

    Sale.findByPk(id).then(data => {

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

    Sale.update(req.body, {
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

    Sale.destroy({
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