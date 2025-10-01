import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import GamesLayout from "./Pages/GamesLayout";
import GamesList from "./Pages/GamesList";
import GameDetail from "./Pages/GameDetail";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";

function PrivateRoute({ children }) {
  const isAuth = localStorage.getItem("isAuthenticated") === "true";
  return isAuth ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* redirige la raíz "/" hacia "/login" */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/login" element={<Login />} />
        
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        <Route
          path="/games"
          element={
            <PrivateRoute>
              <GamesLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<GamesList />} />
          <Route path=":id" element={<GameDetail />} />
        </Route>

        <Route
          path="/about"
          element={
            <PrivateRoute>
              <About />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
