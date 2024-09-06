function App() {
  return (
    <div className="container">
      <h1>Bem vindo</h1>

      <div className="containerInput">
        <h3>Faça o login</h3>
        <input id="login" type="text" placeholder="Login" />
        <input id="senha" type="text" placeholder="Senha" />
      </div>

      <div className="containerButton">
        <button>Login</button>
        <a href="senha.js">Esqueci minha senha</a>
        <button>Cadastre-se</button>
      </div>
      
    </div>
  );
}

export default App;
