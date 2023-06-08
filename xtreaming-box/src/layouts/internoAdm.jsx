import React from 'react';

//Componente Body estilo padrão das páginas
import './body.css';

//Componente Menu Superior
import MenuSuperiorAdm from '../components/MenuSuperiorAdm/MenuSuperiorAdm.jsx';

//Componente Conteudo Principal
import ConteudoPrincipal from '../components/ConteudoPrincipal/ConteudoPrincial.jsx';





const InternoAdm = ({ children }) => (
    <>
        <body>
            <div className='main'> 
                <MenuSuperiorAdm/>
                <ConteudoPrincipal>
                    {children}
                </ConteudoPrincipal>
            </div>
        </body>
    </>
)

export default InternoAdm;
