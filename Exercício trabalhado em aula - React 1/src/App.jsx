import { useState } from "react";
import "./App.css";

function App() {
  const [compras, setCompras] = useState([]);
  const [compra, setCompra] = useState("");
  function handleAdd() {
    if (compra.length > 0) {
      setCompras([...compras, compra]);
    }
  }

  return (
    <>
      <input
        type="text"
        id="input"
        onChange={(e) => setCompra(e.target.value)}
      />
      <button onClick={handleAdd}>Adicionar</button>
      <ul className="compras">
        {compras &&
          compras?.map((compra) => <li key={Math.random() * 100}>{compra}</li>)}
      </ul>
    </>
  );
}

export default App;
