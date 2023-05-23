import './style.css';
import './styleMobile.css';
import logo from '../../assets/imgs/logo.png';


function Login(){
    return(
        <body>
            <div class="main-login">
                <div class="sessao-superior">
                    <img src={logo} class="logo-img" alt="Logotipo do site EXtreamingBox"/>
                </div>
                <div class="sessao-inferior">
                    <form class="card-login">
                        <h1>ACESSO</h1>
                        <div class="textfield">
                            <label id="emailLabel" for="email">E-mail</label>
                            <input type="email" name="email" id="email" oninput="emailValido(this.value)" placeholder="Digite seu e-mail" required/> 
                            <p id="emailErrado"></p>
                        </div>
                        <div class="textfield">
                            <label id="senhaLabel" for="password">Senha</label>
                            <input type="password" name="password" placeholder="Senha" required/>
                        </div>
                        
                        <button type="submit" class="btn-entrar">Entrar</button>
                        <div class="cardlogin-botoes-inferiores">
                            <input class="manterconectado" type="checkbox" name="manterconectado"/>
                            <label class="manterconectado">Manter conectado</label>
                            <button class="btn-esquecisenha">Esqueci a senha</button>
                        </div>
                    </form>
                </div>
            </div>
        </body>
    );
}

export default Login;

