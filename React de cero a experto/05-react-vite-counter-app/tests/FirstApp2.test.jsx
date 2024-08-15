import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';


describe('Pruebas en <FirstApp />', () => {

    // Todas las pruebas usaran estas variables
    const title    = 'Hola, Soy Goku';
    const subTitle = 'Soy un subtitulo';
    
    // Usamos el snapshot
    test('debe de hacer match con el snapshot', () => {
        
        const { container } = render( <FirstApp title={ title } /> );
        expect( container ).toMatchSnapshot();

    });

    // Verificamos que el mensaje se muestre
    test('debe de mostrar el mensaje "Hola, Soy Goku"', () => {
        
        render( <FirstApp title={ title } /> );
        // screen es toda la pagina renderizada desde el body 
        expect( screen.getByText(title) ).toBeTruthy(); // podemos usar .not.toBeTruthy()
        // screen.debug(); // con esto podemos ver el objeto de screen
    });

    // Titulo debe estar en el h1
    test('debe de mostrar el titulo en un h1', () => {
        render( <FirstApp title={ title } /> );
        // getByRole busca por un etiqueta html, en este caso por heading en nivel 1 (h1)
        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain( title );
    });

    // Evaluamos el subtitulo
    test('debe de mostrar el subtitulo enviado por props', () => {
        
        render( 
            <FirstApp 
                title={ title }
                subTitle={ subTitle }
            />  
        );

        expect( screen.getAllByText(subTitle).length ).toBe(2);
    });
});