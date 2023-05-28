
import logo from '../../../assets/imgs/logo.png';


function Login(){
    return(
        <body>
            <div className="main-login">
                <div className="sessao-superior">
                    <img src={logo} className="logo-img" alt="Logotipo do site EXtreamingBox"/>
                </div>
                <div className="sessao-inferior">
                    <form className="card-login">
                        <h1>ACESSO</h1>
                        <div className="textfield">
                            <label id="emailLabel" for="email">E-mail</label>
                            <input type="email" name="email" id="email" oninput="emailValido(this.value)" placeholder="Digite seu e-mail" required/> 
                            <p id="emailErrado"></p>
                        </div>
                        <div className="textfield">
                            <label id="senhaLabel" for="password">Senha</label>
                            <input type="password" name="password" placeholder="Senha" required/>
                        </div>
                        
                        <button type="submit" className="btn-entrar">Entrar</button>
                        <div className="cardlogin-botoes-inferiores">
                            <input className="manterconectado" type="checkbox" name="manterconectado"/>
                            <label className="manterconectado">Manter conectado</label>
                            <button className="btn-esquecisenha">Esqueci a senha</button>
                        </div>
                    </form>
                </div>
            </div>
        </body>
    );
}

export default Login;

