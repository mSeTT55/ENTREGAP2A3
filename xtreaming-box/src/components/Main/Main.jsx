import './Body.css';

//Componente Menu Superior
import MenuSuperior from '../MenuSuperior/MenuSuperior.jsx';

function Main (){
    return (
        <body>
            <div class="main">
                {MenuSuperior()}
                {/*<!--Aqui termina toda parte do menu superior-->*/}
                <div class="conteudo-principal-lista">
                </div>
            </div>
        </body>
    );
}

export default Main;