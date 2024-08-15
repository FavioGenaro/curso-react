import { render } from '@testing-library/react'; // renderiza el componente en memoria
import { FirstApp } from '../src/FirstApp';

// Prueba
describe('Pruebas en <FirstApp />', () => {
    
    // Vamos tomar el componente con todo por defecto y si algo cambia va a fallar
    // test('debe de hacer match con el snapshot', () => {
        
    //     const title = 'Hola, Soy Goku';
    //     // El render actualiza el objeto Spring que es propio de react testing library
    //     // tambien retorna el objeto con propiedad, una de ellas es el container, muy parecido d DocumentObjectModule de HTML
    //     const { container } = render( <FirstApp title={ title } /> );
    //     expect( container ).toMatchSnapshot();

    // });

    test('debe de mostrar el título en un h1', () => {
        
        const title = 'Hola, Soy Goku';
        // del render tambien podemos sacar métodos para analizar el DOM (componente renderizado)
        const { container, getByText, getByTestId } = render( <FirstApp title={ title } /> );
        // Esperamos que el texto del titulo se encuentre en el componente, busca el texto
        // expect( getByText(title) ).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // contiene el titulo, podemos usar toBe pero este no detecta espacios dentro del html (<> {title} </> != <>{title}</>)
        // con toContain se puede
        // expect(h1.innerHTML).toContain( title )

        // Obtenemos el elemento por la propiedad data-testid.
        expect( getByTestId('test-title').innerHTML ).toContain(title)

    });

    test('debe de mostrar el subtitulo enviado por props', () => {
        
        const title = 'Hola, Soy Goku';
        const subTitle = 'Soy un subtitulo';
        const { getAllByText } = render( 
            <FirstApp 
                title={ title }
                subTitle={ subTitle }
            /> 
        );
        // Busca el subtitulo y se asegura que exista
        // getByText solo obtiene un elemento con el contenido, si hay 2 o más este falla

        // con getAll al inicio hace que se pueda entrontrar el texto más de una vez, retorna y arreglo
        // así que con length obtenemos la cantidad de elementos encontrados y los comparamos con 2.
        expect( getAllByText(subTitle).length ).toBe(2);
    });
});