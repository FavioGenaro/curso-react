import { useState } from 'react'
import { UserContext } from './UserContext'

export const UserProvider = ({children}) => {
    
    // declaramos esta varible, que de igual forma podemos pasarla como value del Provider
    // const user = {
    //     id: 123,
    //     name: 'Favio Saico',
    //     email: 'favio@gmail.com'
    // }

    const [user, setUser] = useState(); // user sin valor inicial, por lo que es underfined

    /* definimos el provider, este provee de datos a los hijos, cualquier hijo de UserProvider accederá a ellos */
    // el valor será un objeto {hola:'Mundo'}
    return (
        <UserContext.Provider value={{user, setUser}} > {/* Mandamos user y setUser como parte del contexto */}
            {children /* vamos a renderizar los componentes hijo dentro de userContext */}
        </UserContext.Provider>
    )
}
