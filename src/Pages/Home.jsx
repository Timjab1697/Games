import { Link } from "react-router-dom";
import "../Style/Home.css";

export default function Home() {
  return (
    <div className="home-container">
      {/* HERO con fondo */}
      <header className="home-hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>GameZone</h1>
          <p>
            Bienvenido a <span>GameZone</span>, tu portal de videojuegos.
          </p>
          <nav className="home-nav">
            <Link to="/games" className="home-btn">
              Ver juegos
            </Link>
            <Link to="/about" className="home-btn home-btn-outline">
              Sobre nosotros
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
          <img src="https://generacionxbox.com/wp-content/uploads/2023/10/halo-infinite.jpg" alt="Halo" />
          <h3>Halo Infinite</h3>
          <p>Acción futurista y batallas épicas.</p>
        </div>
        <div className="home-card">
          <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/capsule_616x353.jpg?t=1748630546" alt="Elden Ring" />
          <h3>Elden Ring</h3>
          <p>Mundos abiertos y aventuras desafiantes.</p>
        </div>
        <div className="home-card">
          <img src="https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000001130/c42553b4fd0312c31e70ec7468c6c9bccd739f340152925b9600631f2d29f8b5" alt="Mario" />
          <h3>Super Mario Odyssey</h3>
          <p>Diversión clásica con un toque moderno.</p>
        </div>
      </section>

      {/* CARRUSEL */}
      <section className="carousel-section">
        <h2>Juegos destacados</h2>
        <div className="carousel">
          <div className="carousel-track">
            <img src="https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png" alt="Halo" />
            <img src="https://juegosdigitalescolombia.com/files/images/productos/1619629885-grand-theft-auto-5-gta-v-gta-5-ps5.jpg" alt="Elden Ring" />
            <img src="https://upload.wikimedia.org/wikipedia/en/b/b6/Minecraft_2024_cover_art.png" alt="Mario" />
            <img src="https://cdn1.epicgames.com/offer/fn/FNBR_37-00_C6S4_EGS_Launcher_KeyArt_FNLogo_Blade_1200x1600_1200x1600-0924136c90b79f9006796f69f24a07f6" alt="COD" />
            <img src="https://i0.wp.com/highschool.latimes.com/wp-content/uploads/2021/09/league-of-legends.jpeg?fit=1200%2C668&ssl=1&w=640" alt="Zelda" />
            <img src="https://play-lh.googleusercontent.com/oLgL7u-F5_q_gdqiPgtQbEZZk-0Mmn6fGP15VbwHiNO3lIcpsc_RzDYhUG8XynBxltU" alt="God of War" />
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="video-section">
        <h2>Trailer destacado</h2>
        <div className="video-container">
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/vWycOJfiHY4?si=8lrHy-mcY8_dIwWj"
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
}
