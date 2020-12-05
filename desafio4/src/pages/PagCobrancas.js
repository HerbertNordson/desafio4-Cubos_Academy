import { Lateral } from "../components/MenuLateral";
import { Cabecalho } from "../components/cabecalho";

export function PagCobrancas(props) {
  return (
    <div className="principal">
      <Lateral />
      <div>
        <Cabecalho />
        <div className="botaoEBusca">
          <div>
            <button className="addCliente">Adicionar Cliente</button>
          </div>

          <div className="inputButton">
			<input
			className="buscar"
			placeholder="Procurar por Nome, E-mail ou CPF"></input>
            <button className="buscarButton"> <img src="images/buscar.svg" alt="buscar" /> Buscar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
