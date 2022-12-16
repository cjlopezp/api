const express = require("express");
const cors = require("cors");
const fs = require('fs'); 
const app = express();
const db = require("./models");


var corsOptions = {
    origin: ['http://localhost:8081', 'http://127.0.0.1:5500', 'http://127.0.0.1:5501'] // aqui se especificara el dominio desde donde se lanzara la web
};

app.use(cors(corsOptions));
app.use(express.json({limit: "10mb", extended: true}));
app.use(express.urlencoded({limit: "10mb", extended: true, parameterLimit: 50000}));

var routePath="./routes/";

fs.readdirSync(routePath).forEach(function(file) {
    require(routePath + file)(app);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`El servidor está corriendo en el puerto ${PORT}.`);
});

