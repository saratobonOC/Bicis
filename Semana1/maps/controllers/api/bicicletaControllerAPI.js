var bicicleta = require('../../models/bicicleta');


exports.bicicleta_list = function (req,res){

    res.status(200).json({
        bicicletas: bicicleta.allbicis
    });
}

exports.bicicleta_create = function (req,res){

    var bici = new bicicleta(req.body.id, req.body.color, req.body.modelo);
    bici.ubicacion = [req.body.lat, req.body.lng];

    bicicleta.add(bici);

    res.status(200).json({
        bicicleta: bici
    });
}

exports.bicicleta_delete = function(req, res){

    bicicleta.removeById(req.body.id)

    res.status(204).send();
}

exports.bicicleta_update = function (req, res) {
    var bici = bicicleta.findById(req.body.id);
    if (bici) {
        bici.id = req.body.id;
        bici.color = req.body.color;
        bici.modelo = req.body.modelo;
        bici.ubicacion = [req.body.lat, req.body.lng];

        res.status(200).json({
            bicicleta: bici
        });
    } else {
        res.status(404).send("Bicicleta no encontrada");
    }
};