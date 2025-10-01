import { useState } from "react";
import { putJob } from "../Backend/putJob";

export default function PutJob() {
  const [id, setId] = useState("");
  const [titulo, setTitulo] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [modalidad, setModalidad] = useState("");
  const [resultado, setResultado] = useState("");

  const handleUpdate = async () => {
    const actualizado = await putJob(Number(id), { titulo, empresa, modalidad });
    setResultado(`Trabajo ${actualizado.id} actualizado: ${actualizado.titulo} en ${actualizado.empresa}`);
  };

  return (
    <div>
      <h2>Actualizar Trabajo</h2>
      <input placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
      <input placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
      <input placeholder="Empresa" value={empresa} onChange={(e) => setEmpresa(e.target.value)} />
      <input placeholder="Modalidad" value={modalidad} onChange={(e) => setModalidad(e.target.value)} />
      <button onClick={handleUpdate}>Actualizar</button>
      <p>{resultado}</p>
    </div>
  );
}
