import { useMemo, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom'; //cambiamos el nombre de link, para no causar conflito con el Link de material
import { Button, Grid, Link, TextField, Typography, Alert } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from "react-redux"
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';

const formData = { // valores del registro
    email: '',
    password: ''
}

export const LoginPage = () =>{

    const { status, errorMessage } = useSelector(state => state.auth); // nos traemos el status, que retorna checking, not-authenticated, authenticated

    // el status === 'checking' retorna un booleano true si esta en checking y false si no lo esta 
    // si el status cambia lo actualiza entre checking, not-authenticated o authenticated hace la verificación, si no cambia entonces usa el valor memorizado
    const isAuthenticating = useMemo( () => status === 'checking', [status] )

    const {email, password, onInputChange} = useForm(formData)

    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({email, password}) // mostramos como un objeto el email y password

        // dispatch(checkingAuthentication()) // por el momento solo cambia el estado a checking
        dispatch(startLoginWithEmailPassword({email, password}))
    }

    const onGoogleSignIn = () => { // esto lo ejecuta el boton de google
        // console.log('onGoogleSignIn')
        dispatch(startGoogleSignIn())
    }

    return(
        // pasamos el titulo
        <AuthLayout title='Login'> 
            {/* Creamos el formulario */}
            <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
                <Grid container>
                    {/* el item ocupa 12 columnas en tamaño pequeño, que al no especificar más tamaños, se aplica a todos los tamaños de pantalla */}
                    {/* tambien tienen un margin-top de 2 */}
                    <Grid item xs={12} sx={{mt:2}}>
                        {/* creamos el input de correo */}
                        <TextField label="correo" type="email" placeholder='correo@google.com' fullWidth 
                            name='email' 
                            onChange={onInputChange} 
                            value={email} // el valor es el la variable email
                            // error = { !!emailValid && formSubmitted }
                            // helperText = {emailValid}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{mt:2 }}>
                        {/* creamos el input de contraseña */}
                        <TextField label="Contraseña" type="password" placeholder='Contraseña' fullWidth 
                            name='password' 
                            onChange={onInputChange} 
                            value={password} // el valor es el la variable password
                            // error = { !!passwordValid && formSubmitted }
                            // helperText = {passwordValid}
                        />
                    </Grid>

                    {/* Botones de login */}
                    <Grid container spacing={2} sx={{mb:2, mt:1}}>
                        {/* Alerta por si ocurre algun error */}
                        <Grid 
                            item 
                            xs={ 12 }
                            // erromesage es null y la doble negación lo convierte en boolean
                            display={ !!errorMessage ? '':'none' } // si hay error = false coloca el none y no muestra el boton
                        >
                            <Alert severity='error'>{errorMessage}</Alert>
                        </Grid>
                        <Grid item xs={12} sm={6}> {/* en ventana pequeñas son 12, en más grandes es 6 */}
                            <Button 
                                disabled={isAuthenticating} // se habilita segun sea true o false
                                type='submit' 
                                variant='contained' 
                                fullWidth> {/* el button es de MaterialUI, contained cambia la forma en la que luce el boton y fullWidth para que tome todo el ancho disponible */}
                                Login
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}> {/* en ventana pequeñas son 12, en más grandes es 6 */}
                            <Button 
                                disabled={isAuthenticating} // se habilita segun sea true o false
                                variant='contained' 
                                fullWidth
                                onClick={onGoogleSignIn}
                            > 
                                <Google/> {/* icono de google */}
                                <Typography sx={{ml:1}}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction='row' justifyContent='end'>
                        {/* este link es de material */}
                        {/* color es heredado(va a ser morado), to es a donde queremos que vaya, pero no esto no funciona la navegación
                            debemos decirle que componente es para que se comporte como el, según el sistema de rutas que usemos, 
                            por lo que le decimos que sea el Link de ReactRouter, este componente se comportará como ese y nos redirigirá al 'to' 
                        */}
                        <Link component={ RouterLink } color='inherit' to="/auth/register">
                            Crear una cuenta
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
                
    )
}