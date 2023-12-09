
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({ 
    name: 'auth',
    initialState: { 
        status: 'checking', // estado de la autenticación que puede ser: checking, not-authenticated, authenticated
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null
    },
    reducers: { // definimos las acciones
        // desestrucutamos directamente el payload de action
        login: (state, {payload}) => {
            state.status = 'authenticated', // estado de la autenticación que puede ser: checking, not-authenticated, authenticated
            state.uid = payload.uid,
            state.email = payload.email,
            state.displayName = payload.displayName,
            state.photoURL = payload.photoURL,
            state.errorMessage = null // no deberia haber un mensaje de error
        },
        // desestrucutamos directamente el payload de action
        logout: (state, {payload}) => {
            state.status = 'not-authenticated', // estado de la autenticación que puede ser: checking, not-authenticated, authenticated
            state.uid = null,
            state.email = null,
            state.displayName = null,
            state.photoURL = null,
            state.errorMessage = payload?.errorMessage //este viene como parametro, ? para ver si viene dentro el errorMessage
        },
        checkingCredentials: (state) => {
            state.status = 'checking'
        }
    }
});

//exportamos las acciones
export const { login, logout, checkingCredentials } = authSlice.actions;
