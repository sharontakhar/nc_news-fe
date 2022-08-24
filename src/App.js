import "./App.css";
import Navbar from "./Components/Navbar";
// import AdBanner from "./images/ad_banner.png";
import Topics from "./Components/Topics";
import Logo from "./Components/Logo.js";
import Articles from "./Components/Articles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import TopicPage from "./Components/TopicPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Logo />
        <Navbar />
        <Routes>
          <Route path="/articles" element={<Articles />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/topics/:topic" element={<TopicPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
