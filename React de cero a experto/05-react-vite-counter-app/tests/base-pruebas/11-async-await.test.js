import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Pruebas en 11-async-await.js', () => {
    
    test('getImagen debe de retornar un error si no tenemos api key', async() => {
        
        const resp = await getImagen(); // respuesta de la petición
        // expect( typeof url ).toBe('string'); // recibe cualquier string
        expect( resp ).toBe('No se encontro la imagen'); // error en la petición

    });
});