

describe('Pruebas en <DemoComponent />', () => {
    // este es el titulo de la prueba y un callback que es la prueba en sí    
    test('Esta prueba no debe de fallar', () => {
        // Pasos de las pruebas:
        // 1. inicialización
        const message1 = 'Hola Mundo';
    
        // 2. estímulo
        const message2 = message1.trim();
        
        // 3. Observar el comportamiento... esperado
        expect( message1 ).toBe( message2 ); // mensaje1 sea igual a message2
    });
    
});