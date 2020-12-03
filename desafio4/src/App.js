import "./App.css";

import { PagLogin } from "./pages/PagLogin";
import { PagCadastro } from "./pages/PagCadastro";
import { PagEsqueciSenha } from "./pages/PagEsqueciSenha";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PagHome } from "./pages/PagHome";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
