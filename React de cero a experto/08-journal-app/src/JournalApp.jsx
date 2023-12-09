import { AppRouter } from "./router/AppRouter"
import { AppTheme } from "./theme"

export const JournalApp = () =>{

    return(
        // envolvemos el AppRouter en el AppTheme, este AppTheme podriamos haberlo colocado en main.jsx, pero no queria expandir mucho el main
        <AppTheme>
            <AppRouter/>
        </AppTheme>
    )
}
