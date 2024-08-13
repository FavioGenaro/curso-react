// importamsoe el archivo con las funciones que vamos a probar
import { getSaludo } from '../../src/base-pruebas/02-template-string';


describe('Pruebas en 02-template-string', () => {
    
    test('getSaludo debe de retornar "Hola Fernando"', () => {
        
        const name = 'Fernando';
        const message = getSaludo( name ); // probamos el método

        expect( message ).toBe(`Hola ${ name }`) // comparamos

    });

});