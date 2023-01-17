module.exports = (app,upload) => {

    const router = require("express").Router();

    const authJwt  = require("../middlewares/auth-jwt.js");

    const controller = require("../controllers/admin/configuration-image-controller.js");

    let uploadFields = upload.fields([
        {name: 'image', maxCount: 1},
    ])

    router.post("/",  [authJwt.verifyUserToken, uploadFields], controller.create);
    router.get("/", [authJwt.verifyUserToken], controller.findAll);  
    router.get("/:id", [authJwt.verifyUserToken], controller.findOne);  
    router.put("/:id", [authJwt.verifyUserToken], controller.update);  
    router.delete("/:id", [authJwt.verifyUserToken], controller.delete);
  
    app.use('/api/admin/configuration-images', router);
};