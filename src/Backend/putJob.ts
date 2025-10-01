
export const putJob = async (id: number, datos: { titulo: string; empresa: string; modalidad: string }) => {
  return { id, ...datos };
};
