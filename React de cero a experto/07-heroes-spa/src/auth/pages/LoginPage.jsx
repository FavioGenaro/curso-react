import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () =>{

    const navigate = useNavigate();
    // convocamos al useContext para obtener la función login del conexto AuthContext
    const{login} = useContext (AuthContext)

    // reemplazamos por el /, que igual nos redirigira a /marvel
    const onLogin = () => {

        const lastPath = localStorage.getItem('lastPath') || '/'; // obtiene el ultimo enlace y si no hay retorna el /

        login('Favio Saico') // hacemos el login, este nos pide el nombre del usuario

        // navigate('/', { // ya no vamos directamente a /, que redireccionaba a /marvel
        //     replace: true
        // });
        navigate(lastPath, {
            replace: true
        });
    }

    return(
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button 
                className="btn btn-primary"
                onClick={ onLogin }
            >
                Login
            </button>

        </div>
    )
}