
export const postJob = async (nuevoTrabajo: { titulo: string; empresa: string; modalidad: string }) => {
  return { id: Math.floor(Math.random() * 1000), ...nuevoTrabajo };
};
