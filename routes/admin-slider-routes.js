//se debe incluir (app, upload para subir archivos)

module.exports = (app,upload) => {

    const router = require("express").Router();

    const authJwt  = require("../middlewares/auth-jwt.js");

    const controller = require("../controllers/admin/slider-controller.js");
    //let uploadFields (ambos renglores) dene incluirse para indicar el nombre del 
    //archivo (name:image) y el numero maximno de archivoa a subir (maxCount)
    let uploadFields = upload.fields([
        {name: 'image', maxCount: 1},
    ])
    //router.post("/") [ debe incluir uploadFields. Solo se indica en post]
    router.post("/",  [authJwt.verifyUserToken, uploadFields], controller.create);
    router.get("/", [authJwt.verifyUserToken], controller.findAll);  
    router.get("/:id", [authJwt.verifyUserToken], controller.findOne);  
    router.put("/:id", [authJwt.verifyUserToken], controller.update);  
    router.delete("/:id", [authJwt.verifyUserToken], controller.delete);
  
    app.use('/api/admin/sliders', router);
};