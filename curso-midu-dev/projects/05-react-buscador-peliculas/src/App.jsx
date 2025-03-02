import { useCallback, useRef } from 'react';
import './App.css'
import { Movies } from './components/Movies';
import { useMovies } from './hooks/useMovies';
import { useState } from 'react';
import { useEffect } from 'react';
import debounce from 'just-debounce-it'

function useSearch (){
  // creamos un estado por cada input y controlamos las validaciones
  const [search, updateSearch] = useState('');
  const [error, setError] = useState();
  const isFirstInput = useRef(true);

  // podemos controlar la validaciones por cada letra escrita en el input
  useEffect(()=>{
    // para detectar la primera entrada del usuario
    if(isFirstInput.current){
      // cuando sea false, se mantendrá siempre el false.
      isFirstInput.current = search === ''; // si search esta vacio seria true y sino false
      return
    }

    if(search === ''){
      setError('La busqueda no puede ser vacia');
      return;
    }

    if(search.length<3){
      setError('La busqueda debe tener al menos 3 caracteres');
      return;
    }
    setError(null);
  },[search])

  return { search, updateSearch, error };

}


function App() {

  // ordenamiento
  const [sort, setSort] = useState(false);
  // busqueda
  const { search, updateSearch, error } = useSearch();
  // search es el contenido del input
  const { movies, getMovies, loading } = useMovies({search, sort});
  
  // useRef te permite crear una referencia mutable de un elemento del DOM
  // que persiste durante todo el ciclo de vida del componente, es decir, su valor no se reinicia al renderizar o puede cambiar sin renderizar.
  // util para guardar un valor que puedas mutar como un id, elemento del DOM, contador y cada vez que cambia
  // no vuelve a renderizar el componente, lo que hace diferente al useState (renderiza si cambia su valor)

  // lo usamos para referenciar un elemento del DOM
  const inputRef = useRef();
  // vemos como el useRef no se reinicia en 0, sino que su valor se mantiene a pesar de los renders
  const counter = useRef(0);
  counter.current++;
  // vemos que este sigue siendo 1 porque se reinicia en 0 cada vez.
  let count = 0;
  count++; // 1

  // console.log({counter,useRef:counter.current,count});

  // Forma NO controlada con el useRef
  // const handleClick = () => {
        // current es la propiedad que nos da React para acceder al valor de la referencia
  //   const inputEl = inputRef.current; // elemento o referencia al elemento HTML
  //   const value = inputEl.value; // valor
  //   alert(value);
  // }

  // FORMA NO CONTROLADA
  // validamos los campos una vez que esten ingresados y se de click en el input, es recomendado para evitar muchos estados
  const handleSubmit = (e) => {
    e.preventDefault();

    // es mala practica usar useRef por cada input de un formulario, para eso mejor usamos JS
    // const { query } = Object.fromEntries(new window.FormData(e.target));
    // console.log(query); // el valor del input con el name='query'

    // console.log({search});
    getMovies({search});
  }

  // hacemos un Debounce, que es buscar lo que ha escrito el usuario, si ha parado de escribir un tiempo determinado
  const debouncedGetMovies = useCallback(
    // se ejecuta cada 300ms, es decir, hace la busqueda 300ms despues de que el valor de search cambie
    debounce(search => {
      console.log('search', search)
      getMovies({ search })
    }, 300)
    , [getMovies] // el getMovies de por si se genera una vez
  );

  // FORMA CONTROLADA
  // lo malo es que pode cana cambio en el contenido del input se hace un render, porque el estado cambia
  // esto puede ser lento si nuestra página es pesada
  const handleChange = (event) => {
    // const newQuery = event.target.value;
    // if(newQuery.startsWith('')) return // podemos colocar pre valaciones anter de cambiar el estado
    const newSearch = event.target.value;
    updateSearch(newSearch);
    // getMovies({search: newSearch})
    debouncedGetMovies(newSearch);

  }
  // FINALMENTE PODEMOS USAR CUALQUIERA DE LAS FORMAS, CONTROLADO O NO.

  const handleSort = () => {
    setSort(!sort);
  }

  // Esto lo usamos para ver como getMovies se vuelve a generar por cada cambio de estado del search
  // esto lo solucionamos usando useCallback, tmb se puede usar useMemo, haciendo que retorne un valor y hacer que reciba search como parametro
  // pero useCallback esta pensado para funciones y no para valor
  useEffect(()=>{
    console.log('get')
  }, [getMovies])

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input value={search} onChange={handleChange} name='query' ref={inputRef} type="text" placeholder='Avengers, Star Wars, The Matrix ...' />
          {/* inpur para ordenamiento */}
          <input type='checkbox' onChange={handleSort} checked={sort} />
          {/* onClick={handleClick}  */}
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>

      <main>
        {/* Resultados */}
        {
          loading ? <p>Cargando...</p> : <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
