import { useEffect, useState } from "react";

export default function GetJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <h2>Lista de Trabajos</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            {job.title} - {job.company} ({job.status})
          </li>
        ))}
      </ul>
    </div>
  );
}
