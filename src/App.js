import React, { useState } from "react";
import "./App.css";

function App() {
  const [pagina, setPagina] = useState("cadastro");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [dados, setDados] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome.trim() === "" || email.trim() === "") return;
    setDados([...dados, { nome, email }]);
    setNome("");
    setEmail("");
  };

  const handleRemover = (index) => {
    const novosDados = dados.filter((_, i) => i !== index);
    setDados(novosDados);
  };

  return (
    <div className="App">
      <nav>
        <a href="#" onClick={() => setPagina("cadastro")}>Cadastro</a>
        <a href="#" onClick={() => setPagina("lista")}>Lista</a>
      </nav>

      {pagina === "cadastro" ? (
        <div>
          <h2>Cadastro</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      ) : (
        <div>
          <h2>Lista de Cadastros</h2>
          <ul>
            {dados.map((item, index) => (
              <li key={index}>
                <div>
                  <strong>{item.nome}</strong> - {item.email}
                </div>
                <button onClick={() => handleRemover(index)}>Remover</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
