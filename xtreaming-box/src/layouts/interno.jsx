import React from 'react';

//Componente Body estilo padrão das páginas
import './body.css';

//Componente Menu Superior
import MenuSuperior from '../components/MenuSuperior/MenuSuperior.jsx';

//Componente Conteudo Principal
import ConteudoPrincipal from '../components/ConteudoPrincipal/ConteudoPrincial.jsx';





const Interno = ({ children }) => (
    <>
        <body>
            <div className='main'> 
                <MenuSuperior/>
                <ConteudoPrincipal>
                    {children}
                </ConteudoPrincipal>
            </div>
        </body>
    </>
)

export default Interno;
