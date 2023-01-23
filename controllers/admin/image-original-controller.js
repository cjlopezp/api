const db = require("../../models");
const ImageOriginal = db.ImageOriginal;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    if (!req.body.imageConfigurationId  || !req.body.originalFilename  || !req.body.resizedFilename  || !req.body.entity  || !req.body.entityId  || !req.body.sizeBytes  || !req.body.mediaQuery  || !req.body.name  || !req.body.languageAlias  || !req.body.latency  || !req.body.createdAt  || !req.body.updatedAt  || !req.body.deletedAt) {

        res.status(400).send({
            message: "Faltan campos por rellenar."
        });

        return;
    }

    const configurationImage = {
        
        imageConfigurationId: req.body.imageConfigurationId,
        originalFilename: req.body.originalFilename,
        resizedFilename: req.body.resizedFilename,
        entity: req.body.entity,
        sizeBytes: req.body.sizeBytes,
        mediaQuery: req.body.mediaQuery,
        name: req.body.name,
        languageAlias: req.body.languageAlias,
        latency: req.body.latency,
               
    };

    ConfigurationImage.create(configurationImage).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Algún error ha surgido al insertar el dato."
        });
    });
};

exports.findAll = (req, res) => {

    let whereStatement = {};

    
    if(req.query.imageConfigurationId)
    whereStatement.imageConfigurationId = {[Op.substring]: req.query.imageConfigurationId};

    if(req.query.originalFilename)
    whereStatement.originalFilename = {[Op.substring]: req.query.originalFilename};

    if(req.query.resizedFilename)
    whereStatement.resizedFilename = {[Op.substring]: req.query.resizedFilename};    

    if(req.query.entityId)
    whereStatement.entityId = {[Op.substring]: req.query.entityId};
    
    if(req.query.sizeBytes)
    whereStatement.sizeBytes = {[Op.substring]: req.query.sizeBytes};
    
    if(req.query.filename)
    whereStatement.filename = {[Op.substring]: req.query.filename};

    if(req.query.content)
    whereStatement.content = {[Op.substring]: req.query.content};

    if(req.query.mimeType)
    whereStatement.mimeType = {[Op.substring]: req.query.mimeType};

    if(req.query.sizeBytes)
    whereStatement.sizeBytes = {[Op.substring]: req.query.sizeBytes};
    
    if(req.query.widthPx)
    whereStatement.width_px = {[Op.substring]: req.query.width_px};
    
    if(req.query.heightPx)
    whereStatement.height_px = {[Op.substring]: req.query.height_px}
    
    
        
    
    let condition = Object.keys(whereStatement).length > 0 ? {[Op.and]: [whereStatement]} : {};

    ConfigurationImage.findAll({ where: condition }).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Algún error ha surgido al recuperar los datos."
        });
    });
};

exports.findOne = (req, res) => {

    const id = req.params.id;

    ConfigurationImage.findByPk(id).then(data => {

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

    ConfigurationImage.update(req.body, {
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

    ConfigurationImage.destroy({
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