import React from "react";
import { Link } from "react-router-dom";
import { InputSenha } from "../components/inputSenha";
import { useHistory } from "react-router-dom";

import "./style.css";

export function PagLogin(props) {
	const history = useHistory()
	
  const [senha, setSenha] = React.useState();
  const [email, setEmail] = React.useState();
  const [token, setToken] = React.useState();

  return (
    <div className="telaLogin">
      <div className="login">
        <img className="cubos" src="/images/Layer1.svg" alt="Logo"></img>
        <div className="titulo">
          <span>Login</span>
        </div>
        <div className="email">
          <input
            name="e-mail"
            type="email"
            placeholder="exemplo@cubos.com"
            value={email}
            onChange={(ev) => {
              setEmail(ev.target.value);
            }}
          />
          <InputSenha senha={senha} setSenha={setSenha} />
        </div>
		<div className="esqueciSenha">
			<Link to="/RecuperarSenha">Esqueci minha senha</Link>
		</div>
        <div>
          <button
            className="entrar"
            onClick={() => {
              if (!token) {
                fetch("https://cubos-desafio-4.herokuapp.com/auth", {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify({
                    email: email,
                    senha: senha,
                  }),
                })
                  .then((response) => {
                    return response.json();
                  })
                  .then((response) => {
                    if (response.dados.token) {
                      setToken(response.dados.token);
                      history.push("/home")
                    } else {
                      alert(response.dados.mensagem);
                    }
                  });
              } else {
                alert("Você está desconectado!");
                setToken(undefined);
              }
            }}
          >
            Entrar
          </button>
        </div>
      </div>
      <div className="foraDoLogin">
        <span>
          Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
        </span>
      </div>
    </div>
  );
}
