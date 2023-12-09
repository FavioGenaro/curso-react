import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { journalSlice } from './journal/journalSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer, // añadimos el slice
        journal: journalSlice.reducer
    }
})