import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';


describe('Pruebas en el <CounterApp />', () => {

    const initialValue = 10;
    
    test('debe de hacer match con el snapshot', () => {
        // Se creará un snapshot a partir de este componente
        // si cambiamos el valor de initialValue, el test ya no pasaría.
        const { container } = render(<CounterApp value={ initialValue } />);
        expect( container ).toMatchSnapshot();
    });

    test('debe de mostrar el valor inicial de 100 <CounterApp value={100}>', () => {
        
        render( <CounterApp value={ 100 } /> );
        // Busca el valor de 100 dentro del componente, debemos asegurarnos de que solo haya un 100 en todo el componente
        expect( screen.getByText(100) ).toBeTruthy();

        // Esta es una prueba más especifica
        // expect( screen.getByRole('heading',{ level: 2}).innerHTML ).toContain('100')

    });

    // CLICKS

    test('debe de incrementar con el botón +1', () => {
        // inciciamos en 10
        render( <CounterApp value={ initialValue } /> );
        // fireEvent, de react testing library, permite detallar hasta en que parte del boton se hace click
        // Realiza un click, así que esperamos un 11
        fireEvent.click( screen.getByText('+1') ) // considerando que hay un solo +1, seleccionamos el boton
        expect( screen.getByText('11') ).toBeTruthy(); // deberá existir un 11
        
        // screen.debug() // Permite imprimir en consola el DOM o componente renderizado hasta el punto donde se coloca
    });

    // Parar el boton -1
    test('debe de decrementar con el botón -1', () => {
        
        render( <CounterApp value={ initialValue } /> );
        fireEvent.click( screen.getByText('-1') );
        expect( screen.getByText('9') ).toBeTruthy();

    });

    test('debe de funcionar el botón de reset', () => {
        // El reser debe colocar el valor en 355, que es el valor inicial
        render( <CounterApp value={ 355 } /> );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        // fireEvent.click( screen.getByText('Reset') );

        // Buscamos el elemento button que tenga el aria-label (name) igual a 'btn-reset'
        // sino hay aria-label lo que busca es el contenido en texto del boton, como Reset.
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

        expect( screen.getByText( 355 ) ).toBeTruthy();

    });

});