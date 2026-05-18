import { useState } from "react";
import Buttons from "./components/Buttons";

export default function App() {
  const [tarefas, setTarefas] = useState([]);
  const [texto, setTexto] = useState("");



  function adicionar() {
    const nova = {
      id: Date.now(),
      texto: texto,
      feita: false,
    };

    setTarefas([...tarefas, nova]);
    setTexto("");
  }

  function marcar(id) {
    const novaLista = tarefas.map((t) =>
      t.id === id ? { ...t, feita: !t.feita } : t
    );

    setTarefas(novaLista);
  }

  function remover(id) {
    const novaLista = tarefas.filter((t) => t.id !== id);
    setTarefas(novaLista);
  }

  return (
    <div>
      <h1>To-Do List</h1>

      <div>
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Digite uma tarefa"
        />
        <Buttons funcao={adicionar} btnText="Adicionar" />
      </div>

      <div>
        {tarefas.map((t) => (
          <div key={t.id}>
            <input
              type="checkbox"
              checked={t.feita}
              onChange={() => marcar(t.id)}
            />

            <span
              style={{
                textDecoration: t.feita ? "line-through" : "none",
              }}
            >
              {t.texto}
            </span>

            <Buttons
              funcao={() => remover(t.id)}
              btnText="Remover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
