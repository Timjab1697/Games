import { useState } from "react";
import { postJob } from "../Backend/postJob";

export default function PostJob() {
  const [titulo, setTitulo] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [modalidad, setModalidad] = useState("");
  const [resultado, setResultado] = useState("");

  const handleSubmit = async () => {
    const nuevo = await postJob({ titulo, empresa, modalidad });
    setResultado(`Trabajo creado: ${nuevo.titulo} en ${nuevo.empresa} (${nuevo.modalidad})`);
  };

  return (
    <div>
      <h2>Agregar Trabajo</h2>
      <input placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
      <input placeholder="Empresa" value={empresa} onChange={(e) => setEmpresa(e.target.value)} />
      <input placeholder="Modalidad" value={modalidad} onChange={(e) => setModalidad(e.target.value)} />
      <button onClick={handleSubmit}>Crear</button>
      <p>{resultado}</p>
    </div>
  );
}
