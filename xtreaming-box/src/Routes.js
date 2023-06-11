//Importando o ReactRouter
import {Routes, Route, Switch, Redirect} from 'react-router-dom';

import {RequireAuth} from './contexts/Auth/RequireAuth'


//Importando a pagina inicial
import PagInicial from './pages/paginas_Externas/paginaInicial/index.jsx';

//Importando a pagina de login
import Login from './pages/paginas_Externas/login/index.jsx';

//Importando a pagina de cadastre-se
import CadastreSe from './pages/paginas_Externas/cadastreSe/index.jsx';

//Importando a pagina de contato
import Contato from './pages/paginas_Externas/contato/index.jsx';

//Importando a pagina de meu perfil
import MeuPerfil from './pages/paginas_Internas/meuPerfil/index.jsx';

//Importando a pagina de editar perfil
import EditarPerfil from './pages/paginas_Internas/editarPerfil/index.jsx';


//Importando a pagina de editar perfil
import MinhaLista from './pages/paginas_Internas/minhaLista/index.jsx';

//Importando a pagina de teste
import Series from './pages/paginas_Internas/series/index.jsx';

//Importando a pagina de teste
import TesteMain from './components/TesteMain/Main.jsx';

// paginas do administrador
import Painelcontrole from './pages/Administrador/PainelControle/index.jsx'
import Cadastrarserie from './pages/Administrador/CadastrarSeries/index.jsx'
import Cadastrarplataforma from './pages/Administrador/CadastrarPlataforma/index.jsx'



function Rotas() {
    return (
            <Routes>
                <Route exact path='/' element={<PagInicial/>}/>
                <Route  path='/login' element={<Login/>}/>
                <Route  path='/cadastro' element={<CadastreSe/>}/>
                <Route  path='/contato' element={<Contato/>}/>

                
                <Route  path='/perfil' element={<MeuPerfil/>}/>
                <Route  path='/editarperfil' element={<EditarPerfil/>}/>
                <Route  path='/minhalista' element={<MinhaLista/>}/>
                <Route  path='/series' element={<RequireAuth> <Series/> </RequireAuth>}/>
                <Route  path='/testemain' element={<TesteMain/>}/>

                <Route path= '/paineldecontrole' element={<Painelcontrole/>}/>
                <Route path= '/cadastrarseries' element={<Cadastrarserie/>}/>
                <Route path= '/cadastrarplataforma' element={<Cadastrarplataforma/>}/>
            </Routes> 
    );
} 

export default Rotas;