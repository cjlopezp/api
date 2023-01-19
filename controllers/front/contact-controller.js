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


    const contact = {
        id: req.body.id,
        name: req.body.name,
        lastname: req.body.lastname,
        phone_number: req.body.phone,
        email: req.body.email,
        message_text: req.body.message,
               
    };

    Contact.create(contact).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Algún error ha surgido al insertar el dato."
        });
    });

};
