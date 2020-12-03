import React from "react";
import { InputSenha } from "../components/inputSenha";

import "./style.css";

export function PagCadastro(props) {
  const [senha, setSenha] = React.useState();
  const [email, setEmail] = React.useState();
  const [nome, setNome] = React.useState();

  return (
    <div className="telaInicial">
      <div className="login">
        <img className="cubos" src="/images/Layer1.svg" alt="Logo"></img>
        <div className="tituloLogin">
          <span>Nome</span>
        </div>
        <div className="email">
          <input
            name="nome"
            type="text"
            value={nome}
            onChange={(ev) => {
              setNome(ev.target.value);
            }}
          />
        </div>

        <div className="tituloLogin">
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
        <div>
          <button className="entrar" onClick={() => {}}>
            Criar Conta
          </button>
        </div>
      </div>
      <div className="foraDoLogin">
        <span>
          Já possui uma conta? <a href="/">Acesse Agora!</a>
        </span>
      </div>
    </div>
  );
}
