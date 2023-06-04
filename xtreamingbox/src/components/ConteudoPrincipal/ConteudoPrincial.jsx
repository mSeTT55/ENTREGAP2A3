import './ConteudoPrincipal.css'

function ConteudoPrincipal ({children}){
    return (
        <section className="conteudo-principal-lista" id="conteudoprincipalLista">
            {children}
        </section>
    );
}

export default ConteudoPrincipal;