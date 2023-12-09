import { signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider(); // creamos una instancia de la función

export const singInWithGoogle = async() => { // esta función realiza la autenticación

    try {
        // FirebaseAuth es de config y el proveedor que es googleProvider
        const result = await signInWithPopup(FirebaseAuth, googleProvider );

        // las credenciales retornan cierto valor de google
        // const credentials = GoogleAuthProvider.credentialFromResult( result );
        // console.log({credentials})

        // obtenermos los datos de user, en sí son más, para verlos podemos mostrar en consola result.user
        // uid es algo que retorna firebase, para identificar a los usuarios
        const { displayName, email, photoURL, uid } = result.user;
        
        return { // retornamos los datos del usuario y el ok=true
            ok: true,
            // User info
            displayName, email, photoURL, uid
        }
        

    } catch (error) {
        
        // console.log(error)
        const errorCode = error.code;
        const errorMessage = error.message;
    
        return { // retornamos un false y el error
            ok: false,
            errorMessage,
        }
    }
}

// Proveedor o función para el registro del usuario
export const registerUserWithEmailPassword = async({ email, password, displayName }) => { // destructuramos la data, que es lo que voy a registrar

    try {
        // createUserWithEmailAndPassword es una función de firebase para la autenticación por email y password
        // como teniamos FirebaseAuth contiene la autenticación para firebase
        const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL } = resp.user;
        // console.log(resp)

        // updateProfile es una función de firebase
        // FirebaseAuth.currentUser nos dice cual es nuestro usuario actual autenticado
        await updateProfile( FirebaseAuth.currentUser, { displayName }); // con esto actualizamos el name

        return {
            ok: true,
            uid, photoURL, email, displayName
        }

    } catch (error) {
        // console.log(error);
        return { ok: false, errorMessage: error.message } // retorna el ok=false y mensaje de error si no se logro registrar
    }
}

// para la verificación por login
export const loginWithEmailPassword = async({ email, password}) => {

    // signInWithEmailAndPassword
    try {
        // signInWithEmailAndPassword es una función de firebase para la autenticación por email y password
        // FirebaseAuth contiene la autenticación para firebase
        const resp = await signInWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL, displayName } = resp.user;
        console.log(resp) // muestra las credenciales
        return {
            ok: true,
            uid, photoURL, displayName // retornamos los datos del usuario sacados de firebase
        }

    } catch (error) {
        console.log(error);
        return { ok: false, errorMessage: error.message } // retorna el ok=false y mensaje de error si no se logro registrar
    }

}

// para cerrar sesión
export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut(); // cierra la sesión sin importar si fur por usuario y contraseña, google, etc
    // la función no retorna nada
}