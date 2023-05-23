//Importando o ReactRouter
import { BrowserRouter, Routes, Route} from 'react-router-dom';

//Importando a pagina inicial
import PagInicial from './pages/paginas_Externas/paginaInicial/index.jsx';

//Importando a pagina de login
import Login from './pages/paginas_Externas/login/index.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<PagInicial/>}/>
        <Route  path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
