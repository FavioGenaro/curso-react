import { singInWithGoogle, registerUserWithEmailPassword, loginWithEmailPassword, logoutFirebase } from '../../firebase/providers';
import { clearNotesLogout } from '../journal';
import { checkingCredentials, logout, login } from './';

export const checkingAuthentication = (email, password) => { // boton de login
    return async( dispatch ) => {
        dispatch( checkingCredentials() ); // esta verificando el logeo, por lo que estamos en loading        
    }
}

// creamos otro thunk para la autenticación con google
export const startGoogleSignIn = () => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() ); // esta verificando el logeo, por lo que estamos en loading  
        
        const result = await singInWithGoogle(); // del providers.js
        // console.log(result) // esto es una promise, por lo que con await debemos esperarla para que nos retorne su valor final

        if ( !result.ok ) return dispatch(logout({ errorMessage: result.errorMessage })) // si ok es false retorna o dispara el logout y le pasamos el error

        // si todo sale bien, hacemos un distpatch a login y pasamos result
        dispatch(login(result))
    }
}

// para el registro con email y password
export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() ); // verificamos las credenciales, cambia el status en checking

        const result = await registerUserWithEmailPassword({ email, password, displayName }); // ejecutamos la función del provider.js de firebase
        // console.log(result);
        
        // si es false (!ok) manda a disparar la función de logout, para que salga el error de logeo
        if ( !result.ok ) return dispatch( logout( { errorMessage: result.errorMessage } ) );

        dispatch( login( result )) // si todo salio mal, entonces cambia el estado del redux
    }
}
// para la verificación del login
export const startLoginWithEmailPassword = ({ email, password}) => {

    return async( dispatch ) => {

        dispatch( checkingCredentials() ); // cambia el status en checking

        const result = await loginWithEmailPassword({ email, password }); // ejecutamos la función del provider.js de firebase para validar el email y password en firebase
        console.log(result);
        
        // si es false (!ok) manda a disparar la función de logout, para que salga el error de logeo
        if ( !result.ok ) return dispatch( logout( { errorMessage: result.errorMessage } ) );

        dispatch( login( result )) // si todo salio bien, entonces cambia el estado del redux con los datos recibidos del usuario
    }
}

// cerrar sesión
export const startLogout = () => {
    return async( dispatch ) => {
        
        await logoutFirebase(); // ejecutamos la salida de sesión de firebase(probiders.js)

        dispatch( clearNotesLogout() ) // para limpiar los datos del journal
        dispatch( logout( {} ) ); // cambiamos la información del store, mandamos objeto vacio para que el payload no sea underfined

    }
}