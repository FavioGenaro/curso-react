
import { JSX, useState } from 'react'
import './App.css'
import { Todos } from './components/Todos';

const mockTodos = [
  {
    id: '1',
    title: 'Todo 1',
    completed: false
  },
  {
    id: '2',
    title: 'Todo 2',
    completed: false
  },
  {
    id: '3',
    title: 'Todo 3',
    completed: false
  }
]


// tipamos con un JSX.Element, es decir retorna un JSX.Element
// React.FC: Es un componente funcional de react, es más completo que JSX.Element, permite tipar lo que recibe, como las props
// export const Todos: React.FC<Props> = ({todos}) => {
const App = () : JSX.Element =>{

  const [ todos, setTodos] = useState(mockTodos);


  return (
    <>
      <Todos todos={todos}/>
    </>
  )
}

export default App
