const db = require("../../models");
const ResizedImage = db.ResizedImage;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    if (!req.body.client_id || !req.body.fingerprint_id  || !req.body.image_original_id  || !req.body.image_configuration_id  || !req.body.title  || !req.body.alt  || !req.body.path  || !req.body.entity  || !req.body.language_alias  || !req.body.filename  || !req.body.content  || !req.body.mime_typecontent  || !req.body.grid  || !req.body.size_bytes  || !req.body.width_px  || !req.body.height_px   || !req.body.quality) {

        res.status(400).send({
            message: "Faltan campos por rellenar."
        });

        return;
    }

    const resizedImage = {
        
        image_original_id: req.body.image_original_id,
        image_configuration_id: req.body.image_configuration_id,
        title: req.body.title,
        alt: req.body.alt,
        path: req.body.path,
        entity: req.body.entity,
        language_alias: req.body.language_alias,
        filename: req.body.filename,
        content: req.body.content,
        mime_typecontent: req.body.mime_typecontent,
        grid: req.body.grid,
        size_bytes: req.body.size_bytes,
        width_px: req.body.width_px,
        height_px: req.body.height_px,
        quality: req.body.quality,
       
    };

    ResizedImage.create(resizedImage).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Algún error ha surgido al insertar el dato."
        });
    });
};

exports.findAll = (req, res) => {

    let whereStatement = {};

    if(req.query.client_id)
        whereStatement.client_id = {[Op.substring]: req.query.client_id};

    if(req.query.fingerprint_id)
        whereStatement.fingerprint_id = {[Op.substring]: req.query.fingerprint_id}; 
    
    
    


    let condition = Object.keys(whereStatement).length > 0 ? {[Op.and]: [whereStatement]} : {};

    ResizedImage.findAll({ where: condition }).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Algún error ha surgido al recuperar los datos."
        });
    });
};

exports.findOne = (req, res) => {

    const id = req.params.id;

    ResizedImage.findByPk(id).then(data => {

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

    ResizedImage.update(req.body, {
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

    ResizedImage.destroy({
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