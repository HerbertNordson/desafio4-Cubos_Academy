import React from "react";
import { Link } from "react-router-dom";

export function PagEsqueciSenha(props) {
	const [email, setEmail] = React.useState();
  
	return (
	  <div className="telaLogin">
		<div className="login">
		  <img className="cubos" src="/images/Layer1.svg" alt="Logo"></img>
		  <p>
		  Informe o e-mail associado a sua conta e vamos te enviar instruções para resetar sua senha
		  </p>
		  <div className="titulo">
			<span>E-mail</span>
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
		  </div>
		  <div>
			<button
			  className="entrar"
			>
			  Recuperar Senha
			</button>
		  </div>
		</div>
		<div className="foraDoLogin">
		  <span>
			Já possui uma conta? <Link to="/login">Acessar agora!</Link>
		  </span>
		</div>
	  </div>
	);
  }