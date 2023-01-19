const nodemailer = require('nodemailer');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const dotenv = require('dotenv').config();
const process = require('process');
//se indica la localizacion del modelo
const db = require("../models");
//se especifica el nombre de la tabla en la base de datos
const Emails = db.Emails;

module.exports = class EmailService {

    constructor(type) {

        if(type === 'smtp') {

            this.email = process.env.EMAIL; 

            this.transport = nodemailer.createTransport({
                pool: true,
                host: process.env.EMAIL_HOST,
                port: process.env.EMAIL_PORT,
                secureConnection: true,
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.EMAIL_PASSWORD,
                },
                tls: {
                    ciphers:'SSLv3'
                }
            });

        } 
        
        else if(type === 'gmail') {

            this.email = process.env.GOOGLE_EMAIL; 
                //Aqui se indica la ruta donde se encuentran los tokens para poder usar el servicio de Gmail
            this.transport = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    type: "OAuth2",
                    user: process.env.GOOGLE_EMAIL,
                    clientId: process.env.GOOGLE_CLIENT_ID,
                    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                    refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
                    accessToken: this.getAccessToken()
                }
            });
        }
    }

    getAccessToken() {

        const myOAuth2Client = new OAuth2(
            process.env.GOOGLE_CLIENT_ID,
            process.env.GOOGLE_CLIENT_SECRET,
            "https://developers.google.com/oauthplayground"
        )

        myOAuth2Client.setCredentials({
            refresh_token: process.env.GOOGLE_REFRESH_TOKEN
        });

        const myAccessToken = myOAuth2Client.getAccessToken();

        return myAccessToken;
    }

        //la secuencia de eventos provenientes de contact-controller.js se conecta aquí
    sendEmail(email, destination = this.email) {
        //se crea una variable con multiples atributos para ser enviados 
        const mailOptions = {
            from: this.email, 
            to: destination,
            subject: email.subject,
            html: email.content
        }


        this.transport.sendMail(mailOptions, function (err, result) {
            if (err) {
                console.log(err);
            } else {
                
                //se crea una nueva variable que contien los datos que nos interesa capturar en la tabla "emails"
                const data = {
                    destination: destination,
                    message: email.content, 
                };
                //se confirma la captura de los datos o si hay algun fallo
                Emails.create(data).then(data => {
                    console.log("todo bien");
                }).catch(err => {
                    console.log(err);
                });
            }
        });
    }
}