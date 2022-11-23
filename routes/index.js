let mascotasApi = require("../components/mascotas");
let personasApi = require("../components/personas");

module.exports = app => {
    mascotasApi(app);
    personasApi(app);
    app.get("/", (req, res, next) => {
        res.send("ok")
    })

}