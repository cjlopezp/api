const db = require("../../models");
const Locale = db.Locale;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    if (!req.body.language_alias || !req.body.entity || !req.body.entity_key || !req.body.key || !req.body.value) {

        res.status(400).send({
            message: "Faltan campos por rellenar."
        });

        return;
    }

    const locale = {
             
        language_alias: req.body.language_alias,
        entity: req.body.entity,
        entity_key: req.body.entity_key,
        key: req.body.key,
        value: req.body.value,     
    };

    Locale.create(locale).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Algún error ha surgido al insertar el dato."
        });
    });
};

exports.findAll = (req, res) => {

    let whereStatement = {};

    if(req.query.language_alias)
        whereStatement.language_alias = {[Op.substring]: req.query.language_alias};

    if(req.query.entity)
        whereStatement.entity = {[Op.substring]: req.query.entity}; 
    
        if(req.query.entity_key)
        whereStatement.entity_key = {[Op.substring]: req.query.entity_key};
       
        if(req.query.key)
        whereStatement.key = {[Op.substring]: req.query.key};
        
        if(req.query.value)
        whereStatement.value = {[Op.substring]: req.query.value};
        

    let condition = Object.keys(whereStatement).length > 0 ? {[Op.and]: [whereStatement]} : {};

    Locale.findAll({ where: condition }).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Algún error ha surgido al recuperar los datos."
        });
    });
};

exports.findOne = (req, res) => {

    const id = req.params.id;

    Locale.findByPk(id).then(data => {

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

    Locale.update(req.body, {
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

    Locale.destroy({
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