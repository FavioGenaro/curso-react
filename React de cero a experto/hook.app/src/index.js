import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
// import { TodoApp } from './components/08-useReducer/TodoApp';
import { MainApp } from './components/09-useContext/MainApp';
import { BrowserRouter } from 'react-router-dom';
// // import { CallbackHook } from './components/06-memos/CallbackHook';
// import { Padre } from './components/07-tarea-memo/Padre';
// // import { CallbackHook } from './components/06-memos/CallbackHook';
// // import { Padre } from './components/07-tarea-memo/Padre';
// // import { CounterApp } from './CounterApp';
// // import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook'
// // import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
// // import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
// // import { FocusScreen } from './components/04-useRef/FocusScreen';
// // import { RealExampleRef } from './components/04-useRef/RealExampleRef';
// // import { Layout } from './components/05-useLayoutEffect/Layout';
// // import { Memorize } from './components/06-memos/Memorize';
// // import { MemoHook } from './components/06-memos/MemoHook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <MainApp/>
    </BrowserRouter>
)

// import './components/08-useReducer/intro-reducer'