
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({

    reducerPath: 'todos', // nombre que va a tener el reducer
    baseQuery: fetchBaseQuery({ // es una función que nos va ayudar para realizar la petición, establecemos la url base para todas las peticiones
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),
    // endpoints son  las distintas funciones que usaremos para llamar información
    endpoints: (builder) => ({ // callback

        // esta función traerá todos los todos
        getTodos: builder.query({ // cuando ejecuto el getTodos hace la petición (URL = baseUrl + /todos)
            query: () => '/todos' // este query añade /todo al baseUrl 
        }),

        // esta función traerá los todos uno por uno
        getTodo: builder.query({
            query: (todoId) => `/todos/${ todoId }` // sea añade solo el id al final
        }),
    })
})
// todosApi genera custom hook: en este caso le agrega la palabra use al incio y Query al final de los endpoints
export const { useGetTodosQuery, useGetTodoQuery } = todosApi;
