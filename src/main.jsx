import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home.jsx";
import GamesLayout from "./Pages/gamesLayout.jsx";
import GamesList from "./Pages/GamesList.jsx";
import GameDetail from "./Pages/GameDetail.jsx";
import About from "./Pages/About.jsx";
import NotFound from "./Pages/NotFound.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Games" element={<GamesLayout />}>
          <Route index element={<GamesList />} />
          <Route path=":id" element={<GameDetail />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
