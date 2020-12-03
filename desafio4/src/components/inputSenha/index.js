import React from "react";
import "./style.css";

export function InputSenha(props) {
  const senha = props.senha;
  const setSenha = props.setSenha;
  
  const [mostrar, setMostrar] = React.useState(false);

  return (
    <div>
      <div className="titulo">
        <span>Senha</span>
      </div>
      <div className="inputSenha">
        <input
          name="senha"
          type={mostrar ? "text" : "password"}
          value={senha}
          onChange={(ev) => {
            setSenha(ev.target.value);
          }}
        />
        <button type="button" onClick={() => setMostrar(!mostrar)}>
          <img
            src={`//s.svgbox.net/hero-outline.svg?fill=black#${
              mostrar ? "eye-off" : "eye"
            }`}
            alt="Ver senha"
          />
        </button>
      </div>
    </div>
  );
}
