//Componente Body estilo padrão das páginas
import '../../layouts/body.css';
import Interno from '../../layouts/interno';
import TabelaSerie from '../TabelasAdm/Serie/tabelaSerie.jsx';

function Main (){
    return (
        <Interno>
            <TabelaSerie />
        </Interno>
    );
}

export default Main;