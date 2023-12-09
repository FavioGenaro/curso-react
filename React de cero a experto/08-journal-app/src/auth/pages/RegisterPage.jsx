import { Link as RouterLink } from 'react-router-dom'; //cambiamos el nombre de link, para no causar conflito con el Link de material
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../../store/auth';
import { useMemo } from 'react';

const formData = { // valores del registro
    email: '',
    password: '',
    displayName: ''
}
// vasta que una no cumpla para que formulario no sea valido
const formValidations = { // colocamos las validaciones y el mensaje de error de cada campo
    email: [(value) => value.includes('@'), 'El correo debe tener un @'], // esta es la valicación del email, indicamos que debe tener un @ para ser valido
    password: [(value) => value.length >= 6, 'El password debe tener más de 6 letras'], // debe ser de 6 letras a más
    displayName: [(value) => value.length >= 1, 'El nombre es obligatorio'] // debe ser de 1 letra a más
}

export const RegisterPage = () =>{

    const dispatch = useDispatch()
    const [formSubmitted, setFormSubmitted] = useState(false) //para comprobar si el formulario se disparo

    const { status, errorMessage } = useSelector( state => state.auth); // seleccionamos el status y el erroMessage
    // si esta en checking el boton debe inhabilitarse
    const isCheckingAuthentication = useMemo(() => status === 'checking', [status]) // retorna un true si es checking, se actualiza cada vez que cambia el satus

    // las validaciones pueden realizar en el useForm
    // nosotros de forma dinamica mandamos que validaciones debe realizar en el useForm,
    const {displayName,email, password, onInputChange, formState,
        isFormValid, displayNameValid, emailValid, passwordValid // estos son lo nuevos valores que debe retornar el useForm
    } = useForm(formData , formValidations) // usamos useForm, formValidations lo mandamos como segundo argumento
    // console.log(displayNameValid)

    const onSubmit = (event) => {
        event.preventDefault()
        setFormSubmitted(true) // cuando se postea el formulario
        if(!isFormValid) return; // si el formulario aun no esta valido, entonces retornamos y no ejecutamos lo que sigue
        // console.log(formState) // contiene la data de cada uno de los valores de los input

        dispatch( startCreatingUserWithEmailPassword(formState) ) // mandamos a ejecutar la función del thunks, mandamos los valores del form
    }


    return(
        <AuthLayout title="Crear cuenta">
            <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
                <Grid container>
                    {/* inputs */}
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                            label="Nombre completo" 
                            type="text" 
                            placeholder='Nombre completo' 
                            fullWidth
                            name='displayName'
                            value={displayName}
                            onChange={ onInputChange }
                            // solo evaluamos el formulario si se toca el boton de crear cuenta
                            error = { !!displayNameValid && formSubmitted } // el error se activa en true, por lo que si el nombre no es valido es false, por eso lo negamos
                            helperText = {displayNameValid} // por si retorna error
                        />
                    </Grid>
        
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                            label="Correo" 
                            type="email" 
                            placeholder='correo@google.com' 
                            fullWidth
                            name='email'
                            value={email}
                            onChange={ onInputChange }
                            error = { !!emailValid && formSubmitted }
                            helperText = {emailValid}
                        />
                    </Grid>
        
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                        label="Contraseña" 
                        type="password" 
                        placeholder='Contraseña' 
                        fullWidth
                        name='password'
                        value={password}
                        onChange={ onInputChange }
                        error = { !!passwordValid && formSubmitted }
                        helperText = {passwordValid}
                        />
                    </Grid>
                        
                    <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                        {/* Alerta por si ocurre algun error */}
                        <Grid 
                            item 
                            xs={ 12 }
                            // erromesage es null y la doble negación lo convierte en boolean
                            display={ !!errorMessage ? '':'none' } // si hay error = false coloca el none y no muestra el boton
                        >
                            <Alert severity='error'>{errorMessage}</Alert>
                        </Grid>
                        {/* Boton */}
                        <Grid item xs={ 12 }>
                            <Button 
                                variant='contained' 
                                fullWidth type='submit'
                                disabled = {isCheckingAuthentication} // el boton se inhabilita si esta en checking
                            >
                                Crear cuenta
                            </Button>
                        </Grid>
                    </Grid>
        
                    {/* link inferior */}
                    <Grid container direction='row' justifyContent='end'>
                        <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
                        {/* este link es de material */}
                        {/* color es heredado(va a ser morado), to es a donde queremos que vaya, pero no esto no funciona la navegación
                            debemos decirle que componente es para que se comporte como el, según el sistema de rutas que usemos, 
                            por lo que le decimos que sea el Link de ReactRouter, este componente se comportará como ese y nos redirigirá al 'to' 
                        */}
                        <Link component={ RouterLink } color='inherit' to="/auth/login">
                            ingresar
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    )
}