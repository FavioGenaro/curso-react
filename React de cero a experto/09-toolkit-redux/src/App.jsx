import reactLogo from './assets/react.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementBy } from './store/slices/counter'

function App() {
  // entre parentesis colocamos un callback, tiene como 1er argumento el state y luego de ese state seleccionamos el nombre del objeto que queramos
  // en este caso, retorna el counter, que es un objeto y dentro de ese objeto destructuramosla variable counter
  const {counter} = useSelector(state => state.counter)
  // traemos al dispatch, este ya sabe a que reducer pertenece pues lo definimos en el slice.
  const dispatch = useDispatch() // no le pasamos ningun argumento

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>count is: {counter}</h1>
      <div className="card">
        <button onClick={() => {dispatch(increment())}}> {/* ejecutamos el dispatch, le pasamos la acciones que va a ejecutar */}
          Increment
        </button>
        <button onClick={() => {dispatch(decrement())}}>
          Decrement
        </button>
        <button onClick={() => {dispatch(incrementBy(2))}}> {/* pasamos el argumento 2, se almacena en el action.payload */}
          Increment by 2
        </button>
      </div>
    </div>
  )
}

export default App
