import { Link } from "react-router-dom";
import "../Style/Home.css";

export default function Home() {
  return (
    <div className="home-container">
      {/* HERO con fondo */}
      <header className="home-hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>TRABAJOS ING SISTEMAS</h1>
          <p>
            conoce los mejores <span>Trabajos</span>. 
          </p>
          <nav className="home-nav">
            
            <Link to="/about" className="home-btn home-btn-outline">
              Lista trabajos
            </Link>
            <Link to="/jobs/add" className="home-btn home-btn-outline">
              crea trabajo
            </Link>

           
             <Link to="/jobs/delete/:id" className="home-btn home-btn-outline">
              Elimina trabajo
            </Link>
            <Link to="/jobs/:id" className="home-btn home-btn-outline">
              Busca trabajo
            </Link>
           
            <Link to="/jobs/update/:id" className="home-btn home-btn-outline">
              ACtualiza trabajo
            
            </Link>

             {/* 🔹 Botón que lleva a la página NotFound */}
            <Link to="/no-existe" className="home-btn home-btn-danger">
              Not Found
            </Link>
          </nav>
        </div>
      </header>

      {/* SECCIÓN DE CARDS */}
      <section className="home-cards">
        <div className="home-card">
          <img src="https://virtual.cuc.edu.co/hs-fs/hubfs/Imported_Blog_Media/trabajos-emergentes-ingenieria-sistemas-1.webp?width=800&height=500&name=trabajos-emergentes-ingenieria-sistemas-1.webp" alt="Halo" />
          <h3>Desarrollo!</h3>
          
        </div>
        <div className="home-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqHsVNx1lLsgh8Cm9Pz-XJaM-jolrJCkMq5A&s" alt="Elden Ring" />
          <h3>Innovacion!!</h3>
          
        </div>
        <div className="home-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM1M1H8ELQYAsvGCGgkSgKz_vyjSgdWIBpUg&s" alt="Mario" />
          <h3>Tecnologia!</h3>
      
        </div>
      </section>

      {/* CARRUSEL */}
      <section className="carousel-section">
        <h2>Proyectos destacados</h2>
        <div className="carousel">
          <div className="carousel-track">
            <img src="https://i.ytimg.com/vi/uXpiLLs45-c/hqdefault.jpg" alt="Halo" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4fhgSQKfTQB37kXquKKNI8VY67XJeE8Xn9Q&s" alt="Elden Ring" />
            <img src="https://eduka.occidente.co/wp-content/uploads/2021/08/Ingenieria-sistemas-Eduka-demanda-sectores-economia-1.jpg" alt="Mario" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSdABP9KWJUUJORsp6tI92xqxMJTz0cMPA_w&s" alt="COD" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH_Fj5BoMIuhQm_SQW-ZAs6ISnoSsLijOKsw&s" alt="Zelda" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwTIUZmMzRvu3OjNfV5oxjv1A4mJdAfGYu0Q&s" alt="God of War" />
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="video-section">
        <h2>Conoce un proyecto!!</h2>
        <div className="video-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/uXpiLLs45-c?si=Wd5XmRULEd9Ahrp3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </section>
    </div>
  );
}
