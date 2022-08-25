import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
// import AdBanner from "./images/ad_banner.png";
import Articles from "./Components/Articles";
import ArticlePage from "./Components/ArticlePage";
import Logo from "./Components/Logo.js";
import Navbar from "./Components/Navbar";
import Topics from "./Components/Topics";
import CommentPage from "./Components/CommentPage";
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
          <Route path="/articles/:article" element={<ArticlePage />} />
          <Route path="/articles/:article/comments" element={<CommentPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
