// .d de este archivo indica que solo tiene declaraciones y no código

export type Todo = {
    id:string,
    title: string,
    completed: boolean
}

// podemos crear el tipo en base a un propiedad
// export type TodoTitle = Todo['title'];
export type TodoId = Pick<Todo, 'id'>;
export type TodoTitle = Pick<Todo, 'title'>;
export type TodoCompleted = Pick<Todo, 'completed'>;

// De esta forma juntamos dos propiedades en un solo tipo
// export type TodoCompleted = Pick<Todo, 'id' | 'completed'>;

// 
export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]

export type ListOfTodos = Todo[];