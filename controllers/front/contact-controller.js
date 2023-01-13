const EmailService = require("../../services/email-service");

//se indica la localizacion del modelo
const db = require("../../models");
const Contacts = db.Contacts;
//se especifica el nombre de la tabla en la base de datos
const Op = db.Sequelize.Op;


exports.create = (req, res) => {

    let email = {
        subject: 'Nuevo mensaje de un usuario',
        content: `Hola acaba de llegar un correo de ${req.body.name} Mensaje: ${req.body.message}`
    }

    // desde aqui el proceso salta a EmailService
    new EmailService("gmail").sendEmail(email); 


    // Aqui se retoma el proceso en este archivo una vez EmailService ha corrido toddo su codigo
    if (!req.body.name || !req.body.lastname || !req.body.phone || !req.body.email || !req.body.message) {

        res.status(400).send({
            message: "Faltan campos por rellenar."
        });

        return;
    }
        //aqui se crea una variable con sus atributos
    const contact = {
        name: req.body.name,
        lastname: req.body.lastname,
        phone: req.body.phone,
        email: req.body.email,
        message: req.body.message, 
    };
        //Se guardan los datos (atributos) contenidos enla variable en la base de datos
    Contacts.create(contact).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Algún error ha surgido al insertar el dato."
        });
    });

};

 // insert end


