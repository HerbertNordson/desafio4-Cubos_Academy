// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
		<div className="login">
			<div className="topo">

			</div>
			<div className="dados">
				<div className="email">
					<span>Email</span><br></br>
					<input type="text" placeholder="exemplo@gmail.com" />
				</div>
				<div className="senha">
					<span>Senha</span><br></br>
					<input type="text" />
				</div>
				<span className="recuperarSenha">Esqueci minha senha</span>
			</div>
			<div className="entrar">
				<button>Entrar</button>
			</div>
		</div>
    </div>
  );
}

export default App;
