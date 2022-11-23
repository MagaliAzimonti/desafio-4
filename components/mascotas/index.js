let {Router} = require('express');
let router = new Router();

module.exports = app => {
    let _arr = [
        {
            nombre: "Corcho",
            raza: "perro",
            edad: 13
        },
        {
            nombre: "Mili",
            raza: "perro",
            edad: 17
        },
        {
            nombre: "Piolin",
            raza: "canario",
            edad: 1
        },
        {
            nombre: "Tommy",
            raza: "gato",
            edad: 7
        }
    ];
    
    app.use("/mascotas", router);
    router.get("/", (req, res, next) => {
        res.json({mascotas:_arr})
    })

    router.post("/", (req, res, next) => {
        let obj = req.body;
        _arr.push(obj)
        res.json({mascotas: _arr})
    })
}