import "./App.css";
import Header from "./Components/Header";
import Logo from "./Components/Logo.js";
import Articles from "./Components/Articles";
import HomePage from "./Components/HomePage";
import Topics from "./Components/Topics";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [articles, setArticle] = useState([]);
  const [topics, setTopics] = useState([]);
  return (
    <BrowserRouter>
      <div className="App">
        <Logo />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/articles"
            element={<Articles articles={articles} setArticle={setArticle} />}
          />
          <Route path="/topics" element={<Topics topics={topics} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
