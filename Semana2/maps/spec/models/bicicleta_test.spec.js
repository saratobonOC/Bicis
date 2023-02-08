var bicicleta = require('../../models/bicicleta');

beforeEach(() => { 
    bicicleta.allbicis = []; 
});

describe('bicicleta.allbicis', () => {
    it('Comienza vacía', () => {
        expect(bicicleta.allbicis.length).toBe(0);
    });
});

describe('bicicleta.add', () => {
    it('Agregar una', () => {
        expect(bicicleta.allbicis.length).toBe(0);

        var a = new bicicleta(1, 'rojo', 'urbana', [6.230557, -75.593992]);
        bicicleta.add(a);

        expect(bicicleta.allbicis.length).toBe(1);
        expect(bicicleta.allbicis[0]).toBe(a);

    });
});

describe('bicicleta.findById', () => {
    it('debe devolver la bici con id 1', () => {
        expect(bicicleta.allbicis.length).toBe(0);
        var aBici = new bicicleta(1, 'verde', 'urbana');
        var aBici2 = new bicicleta(2, 'blanca', 'montaña');
        bicicleta.add(aBici);
        bicicleta.add(aBici2);

        var targetBici = bicicleta.findById(1);
        expect(targetBici.id).toBe(1);
        expect(targetBici.color).toBe(aBici.color);
        expect(targetBici.modelo).toBe(aBici.modelo);

    });
});

describe('bicicleta.removeById', () => {
    it('debe devolver la bici con id 1', () => {
            expect(bicicleta.allbicis.length).toBe(0);
            var aBici = new bicicleta(1, 'verde', 'urbana');
            bicicleta.add(aBici);
            bicicleta.removeById(1)
            expect(bicicleta.allbicis.length).toBe(0);

    });
});