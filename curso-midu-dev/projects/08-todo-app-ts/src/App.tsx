
import { JSX, useState } from 'react'
import './App.css'
import { Todos } from './components/Todos';
import { type Todo as TodoType, FilterValue, TodoId, TodoTitle } from './types';
import { TODO_FILTERS } from './consts';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

const mockTodos = [
  {
    id: '1',
    title: 'Ver el Twich de midu',
    completed: true
  },
  {
    id: '2',
    title: 'Aprender React con TypeScript',
    completed: false
  },
  {
    id: '3',
    title: 'Recargar tarjeta de tren',
    completed: false
  }
]


// tipamos con un JSX.Element, es decir retorna un JSX.Element
// React.FC: Es un componente funcional de react, es más completo que JSX.Element, permite tipar lo que recibe, como las props
// export const Todos: React.FC<Props> = ({todos}) => {
const App = () : JSX.Element =>{

  const [ todos, setTodos] = useState(mockTodos);
  const [ filterSelected, setFilterSelected ] = useState<FilterValue>(TODO_FILTERS.ALL);
  // tenemos el id como string
  // id: Pick<Todo, 'id'>, de esta forma extraemos el tipo de dato que tiene la propiedad id del Todo
  const handleRemove = ({id}: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos);
  }

  const handleCompleted = ({id, completed}:  Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if(todo.id === id){
        return {
          ...todo,
          completed
        }
      }
      return todo;
    })

    setTodos(newTodos);
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter);
  }

  const activeCount = todos.filter(todo => !todo.completed).length;
  const completedCount = todos.length - activeCount;

  const filteredTodos = todos.filter(todo => {
    if(filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if(filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const handleRemoveAllCompleted = () => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos);
  }

  const handleAddTodo = ({title} : TodoTitle): void => {
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false
    }
    const newTodos = [ ...todos, newTodo];
    setTodos(newTodos);
  }

  return (
    <div className='todoapp'>
      <Header
        onAddTodo={handleAddTodo}
      />
      <Todos 
        onToggleCompleteTodo={handleCompleted}
        onRemoveTodo={handleRemove}
        todos={filteredTodos}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={handleRemoveAllCompleted}
        handleFilterChange={handleFilterChange}
      />
    </div>
  )
}

export default App
