const EmailService = require("../../services/email-service");

exports.create = (req, res) => {

    let email = {
        subject: 'Nuevo mensaje de un usuario',
        content: `Hola acaba de llegar un correo de ${req.body.name} y lo que ha dicho es: ${req.body.message}`
    }

    new EmailService("gmail").sendEmail(email);

    res.status(200).send({
        message: "El correo ha sido enviado correctamente"
    });
};
