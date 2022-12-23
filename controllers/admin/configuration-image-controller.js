const db = require("../../models");
const ConfigurationImage = db.ConfigurationImage;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    if (!req.body.entity || !req.body.directory  || !req.body.type  || !req.body.content  || !req.body.grid  || !req.body.content_acepted  || !req.body.extension_conversion  || !req.body.width_px  || !req.body.height_px  || !req.body.quality) {

        res.status(400).send({
            message: "Faltan campos por rellenar."
        });

        return;
    }

    const configurationImage = {
        
             
        entity: req.body.entity,
        directory: req.body.directory,
        type: req.body.type,
        content: req.body.content,
        grid: req.body.grid,
        content_aceepted: req.body.content_aceepted,
        extension_conversion: req.body.extension_conversion,
        width_px: req.body.width_px,
        height_px: req.body.height_px,
        quality: req.body.quality,

       
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

    if(req.query.entity)
        whereStatement.entity = {[Op.substring]: req.query.entity};

    if(req.query.directory)
        whereStatement.directory = {[Op.substring]: req.query.directory}; 
    
    if(req.query.directory)
    whereStatement.directory = {[Op.substring]: req.query.directory};

    if(req.query.type)
    whereStatement.type = {[Op.substring]: req.query.type};

    if(req.query.content)
    whereStatement.content = {[Op.substring]: req.query.content};

    if(req.query.directory)
    whereStatement.directory = {[Op.substring]: req.query.directory};

    if(req.query.content)
    whereStatement.content = {[Op.substring]: req.query.content};    

    if(req.query.grid)
    whereStatement.grid = {[Op.substring]: req.query.grid};
    
    if(req.query.content_acepted)
    whereStatement.content_acepted = {[Op.substring]: req.query.content_acepted};
    
    if(req.query.extension_conversion)
    whereStatement.extension_conversion = {[Op.substring]: req.query.extension_conversion};
    
    if(req.query.width_px)
    whereStatement.width_px = {[Op.substring]: req.query.width_px};
    
    if(req.query.height_px)
    whereStatement.height_px = {[Op.substring]: req.query.height_px}
    
    if(req.query.quality)
    whereStatement.quality = {[Op.substring]: req.query.quality}
        
    
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