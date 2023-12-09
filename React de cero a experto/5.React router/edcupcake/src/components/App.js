import Header from "./sections/Header";
import Home from "./pages/home";
import Cupcakes from "./pages/cupcakes";
import AboutUs from "./pages/aboutUs";
import "../styles/styles.scss"

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

const App = () => (
  <Router>
    <Header/>
    <Routes>
      <Route path="/cupcakes" element={<Cupcakes title peticion="cupcake"/>}></Route>
      <Route path="/nosotros" element={<AboutUs/>}></Route>
      <Route path="/" element={<Home/>}></Route>
    </Routes>
  </Router>
)

export default App;
