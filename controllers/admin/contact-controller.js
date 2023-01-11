const db = require("../../models");
const Contact = db.Contact;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    if (!req.body.id || !req.body.name || !req.body.lastname || !req.body.phone || !req.body.email || !req.body.message_text) {

        res.status(400).send({
            message: "Faltan campos por rellenar."
        });

        return;
    }

    const contact = {
        id: req.body.id,
        name: req.body.name,
        lastname: req.body.lastname,
        phone_number: req.body.phone_number,
        email: req.body.email,
        message_text: req.body.message_text,
        
        
       
    };

    Contact.create(contact).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Algún error ha surgido al insertar el dato."
        });
    });
};

exports.findAll = (req, res) => {

    let whereStatement = {};

    if(req.query.id)
        whereStatement.id = {[Op.substring]: req.query.id};

    if(req.query.name)
        whereStatement.name = {[Op.substring]: req.query.name};

    if(req.query.surname)
    whereStatement.surname = {[Op.substring]: req.query.lastname};

    if(req.query.phone_number)
    whereStatement.phone_number = {[Op.substring]: req.query.phone};

    if(req.query.email)
    whereStatement.email = {[Op.substring]: req.query.email};

    if(req.query.message_text)
    whereStatement.message_text = {[Op.substring]: req.query.message_text};

    
    
    



    let condition = Object.keys(whereStatement).length > 0 ? {[Op.and]: [whereStatement]} : {};

    Contact.findAll({ where: condition }).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Algún error ha surgido al recuperar los datos."
        });
    });
};

exports.findOne = (req, res) => {

    const id = req.params.id;

    Contact.findByPk(id).then(data => {

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

    Contact.update(req.body, {
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

    Contact.destroy({
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