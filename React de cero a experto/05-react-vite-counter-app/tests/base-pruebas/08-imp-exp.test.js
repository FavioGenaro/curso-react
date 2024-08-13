import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import heroesData from '../../src/data/heroes';

describe('Pruebas en 08-imp-exp', () => {
    

    test('getHeroeById debe de retornar un héroe por ID', () => {
        // id existe
        const id = 1;
        const hero = getHeroeById( id );
        
        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    });

    test('getHeroeById debe de retornar undefined si no existe', () => {
        // id no exite
        const id = 100;
        const hero = getHeroeById( id );
        //. toBeFalsy: detecta undefined, falso o nulo.
        // expect( hero ).toBe(undefined) // undefined es considerado un primitivo, por eso podemos enviarlo de esa forma
        expect( hero ).toBeFalsy();
    });


    // Tarea:
    test('getHeroesByOwner debe de regresar heroes de DC', () => {
        
        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );

        expect( heroes.length ).toBe( 3 ); // debe retornar un arreglo de 3 elementos
        expect( heroes ).toEqual([ // comparamos el arreglo retornado
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);
        // comparamos el valor replicando la función original (revisar el archivo 08-imp-exp.js)
        expect( heroes ).toEqual( heroesData.filter( (heroe) => heroe.owner === owner ) )


    });

    test('getHeroesByOwner debe de regresar heroes de Marvel', () => {
        
        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );
        // retorna un arreglo de 2 elementos
        expect( heroes.length ).toBe( 2 );
        // comparamos el valor replicando la función original (revisar el archivo 08-imp-exp.js)
        expect( heroes ).toEqual( heroesData.filter( (heroe) => heroe.owner === owner ) )
    });
});


