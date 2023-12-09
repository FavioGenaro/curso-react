import { types } from "../types/types";

// definimos las acciones del reducer, según el tipo de action
export const authReducer = ( state = {}, action) => {

    switch (action.type) {//según el tipo de la acción, si es login o logout
        case types.login: // retorna un nuevo estado(en la variable state)
            return {
                ...state, // traemos el state anterior y reemplazamos solo lo que nos interesa, pues state puede tener muchos valores
                logged: true,
                user: action.payload // datos del usuario
            };
        case types.logout:
            return {
                ...state,
                logged: false // solo necesitamos eso, pues el name no es necesario cuando sales del sesión o podemos poner name:null
            };
        default:
            return state;
    }

}