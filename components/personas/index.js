let {Router} = require('express');
let router = new Router();
let multer = require('multer');
let path = require('path');

let storage = multer.diskStorage({
    destination: path.join(__dirname, "../../uploads"),
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, `${file.originalname}`);
    }
});

let midMulter = multer({
    storage,
    dest: path.join(__dirname, "../uploads"),
    limits:{fileSize: 1000000000}
})

let addNac = (req, res, next) => {
    req.body.nacionalidad = "Argentina"
    next() // capas middleware
}

module.exports = app => {
    let _arr = [
        {
            nombre: "Magalí",
            edad: 24
        },
        {
            nombre: "Fausto",
            edad: 4
        },
        {
            nombre: "Gustavo",
            edad: 50
        },
        {
            nombre: "Fernanda",
            edad: 47
        },
        {
            nombre: "Nahuel",
            edad: 21
        }
    ];
    app.use("/personas", router);
    router.use(midMulter.single("file"))
    router.get("/", (req, res, next) => {
        res.json({personas:_arr})
    })

    router.post("/", addNac, (req, res, next) => {
        let obj = req.body;
        _arr.push(obj)
        res.json({personas: _arr})
    })
    router.post("/archivo", (req, res, next) => {
        console.log(req.file)
        res.json({hola: "hola"})
    })
}