// importamos las funciones del archivo
import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';


describe('Pruebas en 05-funciones', () => {
    
    test('getUser debe de retornar un objecto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        
        const user = getUser();
        console.log(user);
        // esto falla porque con los objetos se hace la comparación en memoria
        // para primitivos como enteros y string si se hace la comparación por valor
        // expect( testUser ).toBe( user ); 
        expect( testUser ).toEqual( user ); // tmb podemos usar el toStrictEqual
    });


    test('getUsuarioActivo debe de retornar un objeto', () => {
        const name = 'Fernando'; // se tiene sensibilidad entre mayusculas y minusculas

        const user = getUsuarioActivo( name );
        
        expect( user ).toStrictEqual({
            uid: 'ABC567',
            username: name
        });
    });

});
