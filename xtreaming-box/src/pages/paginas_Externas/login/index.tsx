import React, {useState, useContext} from 'react';
import '../../../layouts/body.css';
import './styleLogin.css';
import './styleLoginMobile.css';
//import logo from '../../../assets/imgs/logo';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/Auth/AuthContext';


function Login(){
    const auth = useContext(AuthContext);
    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const formSumbit = async (pegarCada: React.FormEvent<HTMLFormElement>) => {
        pegarCada.preventDefault();
        const isLogged = await auth.entrar(email, senha);
        if (isLogged) {
            navigate('/series');
        }else{
            alert("Usuário ou senha incorreta.");
        }
    }

    return(
        <body>
            <div className="main-login">
                <div className="sessao-superior-login">
                    <Link to={"/"}>
                        <img  className="logoimg" alt="Logotipo do site EXtreamingBox"/>
                    </Link> 
                    
                </div>
                <div className="sessao-inferior">
                    <form className="card-login" onSubmit={(pegarCada) => formSumbit(pegarCada)}>
                        <h1>ACESSO</h1>
                        <div className="textfield">
                            <label id="emailLabel">E-mail</label>

                            <input type="email" 
                                name="email" 
                                id="email" 
                                placeholder="Digite seu e-mail" 
                                value={email} 
                                onChange={e => setEmail(e.target.value)}
                                required
                            /> 

                            <p id="emailErrado"></p>
                        </div>
                        <div className="textfield">
                            <label id="senhaLabel">Senha</label>

                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Senha" 
                                value={senha}
                                onChange={e => setSenha(e.target.value)} 
                                required
                            />

                        </div>
                        
                        <button type="submit" className="btn-entrar">Entrar</button>
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

