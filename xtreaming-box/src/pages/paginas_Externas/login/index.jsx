import '../../../layouts/body.css';
import './styleLogin.css';
import './styleLoginMobile.css';
import logo from '../../../assets/imgs/logo.png';


function Login(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const btnLogin = () => {

    }

    return(
        <body>
            <div className="main-login">
                <div className="sessao-superior-login">
                    <img src={logo} className="logoimg" alt="Logotipo do site EXtreamingBox"/>
                </div>
                <div className="sessao-inferior">
                    <form className="card-login">
                        <h1>ACESSO</h1>
                        <div className="textfield">
                            <label id="emailLabel" for="email">E-mail</label>

                            <input type="email" 
                                name="email" 
                                id="email" 
                                placeholder="Digite seu e-mail" 
                                value={email} 
                                required
                            /> 

                            <p id="emailErrado"></p>
                        </div>
                        <div className="textfield">
                            <label id="senhaLabel" for="password">Senha</label>

                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Senha" 
                                value={senha} 
                                required
                            />

                        </div>
                        
                        <button onClick={btnLogin} className="btn-entrar">Entrar</button>
                        <div className="cardlogin-botoes-inferiores">
                            <input className="manterconectado-login" type="checkbox" name="manterconectado"/>
                            <label className="manterconectado-login">Manter conectado</label>
                            <button className="btn-esquecisenha">Esqueci a senha</button>
                        </div>
                    </form>
                </div>
            </div>
        </body>
    );
}

export default Login;

