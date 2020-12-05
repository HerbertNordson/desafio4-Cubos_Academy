import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

export function Cabecalho(props) {
  const history = useHistory();

  //const [saldo, setSaldo] = React.useState();
  const [mostrar, setMostrar] = React.useState(false);
  //const [token, setToken] = React.useState();

  return (
    <div className="cabecalho">
      <div className="conteudo">
        <div className="saldo">
          <div className="imagem">
            <img src="images/$.svg" alt="" />
            Saldo em conta
          </div>
          <span className="valor">R$ 0,00</span>
        </div>
      </div>
      <div className="sair">
        <button
          className="perfil"
          onClick={() => {
            if (!mostrar) {
              setMostrar(true);
            } else {
              setMostrar(false);
            }
          }}
        >
          <img src="images/perfil.svg" alt="perfil" />
        </button>
        <div className="botaoSair">
          {mostrar && (
            <button
              className="deslogar"
              onClick={() => {
                history.push("/login");
                //setToken(undefined);
              }}
            >
              <img src="images/deslogar.svg" alt=""/>
              Deslogar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
