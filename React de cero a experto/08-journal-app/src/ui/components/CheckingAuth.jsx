import { CircularProgress, Grid } from '@mui/material';

export const CheckingAuth = () => {

    return(
        <Grid
            container
            spacing={ 0 }
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
        >
    
            <Grid container
                direction='row'
                justifyContent='center'
            > 
            {/* Barra de progreso, aparece cuando el status es de checking */}
                <CircularProgress color='warning' />
            </Grid>
        </Grid>
        )
}