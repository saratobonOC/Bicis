var bicicleta = require('../../models/bicicleta');
var request = require('request');
var server = require('../../bin/www');


describe('bicicleta_api', () => {
    describe('get bicicletas /', () => {
        it('Status 200', () => {
            expect(bicicleta.allbicis.length).toBe(0)

            var a = new bicicleta(1, 'negro', 'urbana', [6.230557, -75.593992]);
            bicicleta.add(a);
            
            request.get('http://localhost:5000/api/bicicletas', function(error, response, body){
                expect(response.statusCode).toBe(200)
            });
        });
    });


    describe('post bicicletas /create', () => {
        it('Status 200', (done) => {
            var headers = {'content-type': 'application/json'};
            var aBici = '{ "id": 10, "color": "rojo", "modelo": "urbana", "lat": 6.230557, "lng": -75.593992}';
            request.post({
                headers:  headers,
                url:     'http://localhost:5000/api/bicicletas/create',
                body:     aBici
              }, function(error, response, body) {
                    expect(response.statusCode).toBe(200)
                    expect(bicicleta.findById(10).color).toBe("rojo");
                    done();
            });
        });
    });


    describe('post bicicletas /delete', () => {
        it('Status 200', (done) => {
            var headers = {'content-type': 'application/json'};
            var aBici = '{ "id": 10, "color": "rojo", "modelo": "urbana", "lat": 6.230557, "lng": -75.593992}';
            request.delete({
                headers:  headers,
                url:     'http://localhost:5000/api/bicicletas/delete',
                body:     aBici
              }, function(error, response, body) {
                    expect(response.statusCode).toBe(204)
                    expect(bicicleta.removeById(10));
                    done();
            });
        });
    });


    // FALTA CREAR EL UPDATE
});