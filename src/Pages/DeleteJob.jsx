import { useState } from "react";
import { deleteJob } from "../Backend/deleteJob";

export default function DeleteJob() {
  const [id, setId] = useState("");
  const [resultado, setResultado] = useState("");

  const handleDelete = async () => {
    const res = await deleteJob(Number(id));
    setResultado(res.success ? `Trabajo ${res.id} eliminado` : "Error al eliminar");
  };

  return (
    <div>
      <h2>Eliminar Trabajo</h2>
      <input placeholder="ID del trabajo" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleDelete}>Eliminar</button>
      <p>{resultado}</p>
    </div>
  );
}
