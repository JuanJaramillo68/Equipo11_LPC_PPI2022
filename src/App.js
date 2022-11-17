import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './Paginas/Inicio';
import Cursos from './Paginas/Cursos';
import Login from './Paginas/Login';
import Registro from './Paginas/Registro';
import HomeL from './Paginas/HomeL';
import Perfil from './Paginas/Perfil';
import CursosL from './Paginas/CursosL';
import Miscursos from './Paginas/Miscursos';

function App() {
  return (
    <Router>
      <Routes>


        <Route exact path='/' element={<Inicio/>}/>
        <Route exact path='/cursos' element={<Cursos/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/registro' element={<Registro/>}/>
        <Route exact path='/homeL' element={<HomeL/>}/>
        <Route exact path='/perfil' element={<Perfil/>}/>
        <Route exact path='/cursosL' element={<CursosL/>}/>
        <Route exact path='/miscursos' element={<Miscursos/>}/>

      </Routes>
    </Router> 
  );
}

export default App;
