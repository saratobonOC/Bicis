var bicicleta = function (id, color, modelo, ubicacion) {

    this.id = id;
    this.color = color;
    this.modelo = modelo; 
    this.ubicacion = ubicacion;

}

bicicleta.prototype.toString = function () {

    return 'id: ' + this.id + "color: " + this.color;
}

bicicleta.allbicis = [];
bicicleta.add = function (aBici) {
    bicicleta.allbicis.push(aBici);

}

bicicleta.findById = function (aBiciId) {

    var aBici = bicicleta.allbicis.find(x => x.id == aBiciId);
    if(aBici)
        return aBici;
    else
        throw new Error(`No existe una bicicleta con el id ${aBiciId}`);
}
 
bicicleta.removeById = function(aBiciId)  {

    for(var i =0; i < bicicleta.allbicis.length; i++){
        if(bicicleta.allbicis[i].id == aBiciId){
            bicicleta.allbicis.splice(i, 1);
            break;
        }
    }
}


var a = new bicicleta(1, 'rojo', 'urbana', [6.230557, -75.593992]);
var b = new bicicleta(2, 'blanca', 'montaña', [6.248562, -75.611744]);
var c = new bicicleta(3, 'azul', 'bmx', [6.269143, -75.589028]);

bicicleta.add(a);
bicicleta.add(b);
bicicleta.add(c);


module.exports = bicicleta;