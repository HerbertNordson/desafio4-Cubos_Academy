import React from "react";
import { useHistory } from "react-router-dom";

import "./style.css";

export function Lateral(props) {
  const history = useHistory();

  const [corBotao, setCorBotao] = React.useState("home");

  return (
    <div className="lateral">
      <img className="imagemLogo" src="images/Logo.svg" alt="" />
      <div className="menu">
        <div className="itemMenu">
          <button
            className={corBotao === "home" ? "home" : "homeAtivo"}
            onClick={() => {
              setCorBotao("home");
              history.push("/home");
            }}
          >
            <img src="images/home.svg" alt="" />
            HOME
          </button>
        </div>
        <div>
          <button
            className={corBotao === "cobranca" ? "cobrancas" : "cobrancasAtivo"}
            onClick={() => {
              setCorBotao("cobranca");
              history.push("/cobranca");
            }}
          >
            <img src="images/money.svg" alt="" />
            COBRANÇAS
          </button>
        </div>
        <div>
          <button
            className={corBotao === "cliente" ? "clientes" : "clientesAtivo"}
            onClick={() => {
              setCorBotao("cliente");
              history.push("/clientes");
            }}
          >
            <img src="images/users.svg" alt="" />
            CLIENTES
          </button>
        </div>
        <div>
          <button className="criarCobranca">Criar Cobrança</button>
        </div>
      </div>
    </div>
  );
}
