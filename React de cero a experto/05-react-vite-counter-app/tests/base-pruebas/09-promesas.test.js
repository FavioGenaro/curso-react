import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';


describe('Pruebas en 09-promesas', () => {
    // done(): método que se llama cuando termina la ejecución del código. Hace la espera de la promesa.
    // si despues de 5 segundos no se llama al done() nos retorna un error, esto se puede configurar
    test('getHeroeByIdAsync debe de retornar un héroe', (done) => {
        // por defecto el test suite no espera la respueta de la promesa
        // por lo que podría retorna positivo sin haber recibido la respuesta

        const id = 1;
        // el método es una promesa, por lo que usamos el .then
        getHeroeByIdAsync( id )
            .then( hero => {
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
                // de se colocado acá para que espere el .then
                done();
            });
        
    });

    test('getHeroeByIdAsync debe de obtener un error si heroe no existe', (done) => {
        
        const id = 100; // id no existe
        getHeroeByIdAsync( id )
            .then( hero => {
                expect( hero ).toBeFalsy();
                done();
            })
            .catch( error => {
                // cae en el catch y comprobamos el mensaje de error.
                expect( error ).toBe(`No se pudo encontrar el héroe ${ id }`)
                done();
            });
        
    });


});