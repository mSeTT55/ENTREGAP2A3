import './Body.css';

//Componente Menu Superior
import MenuSuperior from '../MenuSuperior/MenuSuperior.jsx';

//Componente Conteudo Principal
import ConteudoPrincipal from '../ConteudoPrincipal/ConteudoPrincial.jsx';

function Main (){
    return (
        <body>
            <div className="main">
                {MenuSuperior()}
                {/*<!--Aqui termina toda parte do menu superior-->*/}
                {ConteudoPrincipal()}
            </div>
        </body>
    );
}

export default Main;