
import { Grid, Typography } from '@mui/material';
// el titulo sea una prop, sea Login o Register en este caso.
export const AuthLayout = ({children, title =''}) =>{ 
    // todas las paginas que usen este layout van a tener esos 2 grid y Typography y sus hijos van a estar contenidos dentro
    return( // su contenido va a ser reutilizable
    <Grid
        container
        spacing={ 0 } /* en 0 para que no hay espacio entre los hijos*/
        direction="column" /* como colocar flexbox direction (horizontal) */
        alignItems="center" /*  */
        justifyContent="center" /*  */
        /* con sx es como la propiedad style del html, definmos  minHeight, color de fondo y demás propiedades
            tmb nos otorga acceso al tema que definimos y que esta en ThemeProvider 
            usamos el tema para definir el color, que es primary.main(morado)
            luego definimos el padding, que puede ser pr (padding right) o pb (padding botom) y demás
        */
        sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >
        <Grid item // esta va a ser una caja tipo item, que en sí envolvera al formulario que irá al centro
            className='box-shadow' // esta clase esta definida en styles.css
            // xs define el numero de columnas que ocupara la caja en un tamaño small (existen tmb medidas md, xl, etc), la cantida de columnas tiene son 12, igual que bootstrap
            xs={ 3 } // em pantallas pequeñas o small va a tener 3 posiciones 
            sx={{ 
                width: { sm: 450 }, // el ancho es de 450px en tamaños sm
                backgroundColor: 'white', 
                padding: 3, 
                borderRadius: 2 
            }}>
            {/* creamos el titulo del form */}
            {/* en el sx de Typography se definimo un margin-botom de 1 */}
            <Typography variant='h5' sx={{ mb: 1 }}>{title}</Typography>

            {children}
        </Grid>

    </Grid>
    )
}