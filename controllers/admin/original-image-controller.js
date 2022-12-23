const db = require("../../models");
const OriginalImage = db.OriginalImage;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    if (!req.body.path || !req.body.entity || !req.body.entity_id || !req.body.language_alias|| !req.body.filename || !req.body.content || !req.body.mime_type || !req.body.size || !req.body.width_px || !req.body.height_px) {

        res.status(400).send({
            message: "Faltan campos por rellenar."
        });

        return;
    }

    const originalImage = {
   
        path: req.body.path,
        entity: req.body.entity,
        entity_id: req.body.entity_id,
        language_alias: req.body.language_alias,
        filename: req.body.filename,
        content: req.body.content,
        mime_type: req.body.mime_type,
        size: req.body.size,
        width_px: req.body.width_px,
        height_px: req.body.height_px,
       
    };

    OriginalImage.create(originalImage).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Algún error ha surgido al insertar el dato."
        });
    });
};

exports.findAll = (req, res) => {

    let whereStatement = {};

    if(req.query.path)
        whereStatement.path = {[Op.substring]: req.query.path};

    if(req.query.entity)
        whereStatement.entity = {[Op.substring]: req.query.entity}; 
    
        if(req.query.entity_id)
        whereStatement.entity_id = {[Op.substring]: req.query.entity_id};

        if(req.query.language_alias)
        whereStatement.language_alias = {[Op.substring]: req.language_alias};

        if(req.query.filename)
        whereStatement.filename = {[Op.substring]: req.filename};

        if(req.query.content)
        whereStatement.content = {[Op.substring]: req.content};

        if(req.query.mime_type)
        whereStatement.mime_type = {[Op.substring]: req.mime_type};

        if(req.query.size)
        whereStatement.size = {[Op.substring]: req.size};

        if(req.query.width_px)
        whereStatement.width_px = {[Op.substring]: req.width_px};

        if(req.query.height_px)
        whereStatement.height_px = {[Op.substring]: req.height_px};
    


    let condition = Object.keys(whereStatement).length > 0 ? {[Op.and]: [whereStatement]} : {};

    OriginalImage.findAll({ where: condition }).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Algún error ha surgido al recuperar los datos."
        });
    });
};

exports.findOne = (req, res) => {

    const id = req.params.id;

    OriginalImage.findByPk(id).then(data => {

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

    OriginalImage.update(req.body, {
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

    OriginalImage.destroy({
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