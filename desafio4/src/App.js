import "./App.css";

import { PagLogin } from "./pages/PagLogin";
import { PagCadastro } from "./pages/PagCadastro";
import { PagEsqueciSenha } from "./pages/PagEsqueciSenha";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PagHome } from "./pages/PagHome";
import { PagCobrancas } from "./pages/PagCobrancas";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <PagLogin />
        </Route>
        <Route path="/cadastro">
          <PagCadastro />
        </Route>
        <Route path="/recuperarSenha">
          <PagEsqueciSenha />
        </Route>
		<Route path="/home">
          <PagHome />
        </Route>
		<Route path="/cobranca">
          <PagCobrancas/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
