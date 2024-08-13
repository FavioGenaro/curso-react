import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr';

describe('Pruebas en 07-deses-arr', () => {
    
    test('debe de retornar un string y un número', () => {
        // si queremos que retorne string y un entero, podemos destructurar el arreglo
        const [ letters, numbers ] = retornaArreglo();
        
        // evaluamos cada variables
        expect( letters ).toBe( 'ABC' );
        expect( numbers ).toBe( 123 );
        // podemos evaluar tipos
        expect(typeof letters).toBe('string')
        expect(typeof numbers).toBe('number')

        // esta es otra forma de evaluar el tipo de dato
        expect( letters ).toEqual( expect.any(String) );
    });
});