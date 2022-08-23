import "./App.css";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import Logo from "./Components/Logo.js";
import Articles from "./Components/Articles";
import Topics from "./Components/Topics";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [articles, setArticle] = useState([]);
  return (
    <BrowserRouter>
      <div className="App">
        <Logo />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles" element={<Articles articles={articles} />} />
          <Route path="/topics" element={<Topics />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
