import React, { useState } from "react";
import "./App.css";

function App() {
  const [pagina, setPagina] = useState("cadastro");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [dados, setDados] = useState([]);
  const [nomeItem, setNomeItem] = useState("");
  const [precoItem, setPrecoItem] = useState("");
  const [itens, setItens] = useState([]);


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

  const adicionarItem = (e) => {
    e.preventDefault();
    if (nomeItem.trim() === "" || precoItem.trim() === "") return;
    setItens([...itens, { nome: nomeItem, preco: parseFloat(precoItem) }]);
    setNomeItem("");
    setPrecoItem("");
  };

   const removerItem = (index) => {
    const novosItens = itens.filter((_, i) => i !== index);
    setItens(novosItens);
  };


  return (
    <div className="App">
      <nav>
        <a href="#" onClick={() => setPagina("cadastro")}>Cadastro</a>
        <a href="#" onClick={() => setPagina("lista")}>Lista</a>
      </nav>

      {pagina === "cadastro" ? (
        <div>
          <h2>Cadastro de Pessoas</h2>
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
          <h2>Cadastro de Itens</h2>
          <form onSubmit={adicionarItem}>
            <input
              type="text"
              placeholder="Nome do Item"
              value={nomeItem}
              onChange={(e) => setNomeItem(e.target.value)}
            />
             <input
              type="number"
              placeholder="Preço do Item"
              value={precoItem}
              onChange={(e) => setPrecoItem(e.target.value)}
              step="0.01"
            />
            <button type="submit">Adicionar Item</button>
          </form>
        </div>
      ) : (
        <div>
          <h2>Lista de Pessoas</h2>
          <ul>
            {dados.map((item, index) => (
              <li key={index}>
                <strong>{item.nome}</strong> - {item.email}
                <button onClick={() => handleRemover(index)}>Remover</button>
              </li>
            ))}
          </ul>

          <h2>Lista de Itens</h2>
          <ul>
            {itens.map((item, index) => (
              <li key={index}>
                <strong>{item.nome}</strong> - {item.preco.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                })}
                <button onClick={() => removerItem(index)}>Remover</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
