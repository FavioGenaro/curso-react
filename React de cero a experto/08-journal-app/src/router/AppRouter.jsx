
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { useCheckAuth } from '../hooks/useCheckAuth'
import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { CheckingAuth } from '../ui'

export const AppRouter = () =>{

    // const { status } = useSelector(state => state.auth) 
    const { status } = useCheckAuth();

    // const dispatch = useDispatch()

    if(status === 'checking') { // si es checking muestra el componente de carga y no genera las rutas
        return <CheckingAuth/> 
    }

    return(
        <Routes>

            {
                // aplicamos protección de rutas
                (status === 'authenticated') 
                ? <Route path="/*" element={ <JournalRoutes /> } /> // si esta autenticado va a la pagina principal (solo esas rutas existen)
                : <Route path="/auth/*" element={ <AuthRoutes /> } /> // si no esta autenticado va al authRouter, (sea login o registro)
            }

            {/* Si no esta en ninguna de las rutas declaradas, se va a login, pues se considera que no esta autenticado */}
            <Route path='/*' element={ <Navigate to='/auth/login' />  } /> 


            {/* Para la protección de rutas usaramos otros metodo */}

            {/* Login y registro */}
            {/* cualquier ruta que empiece con /auth/* lo mandamos a  <AuthRoutes/> */}
            {/* <Route path='/auth/*' element= {<AuthRoutes/>} /> */}

            {/* JournalApp */}
            {/* cualquier ruta (como ya paso por /auth/*, no tomará esas rutas), nos manda a <JournalRoutes/> */}
            {/* <Route path='/*' element= {<JournalRoutes/>} /> */}

        </Routes>
    )
}
