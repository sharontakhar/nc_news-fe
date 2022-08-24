import "./App.css";
import Navbar from "./Components/Navbar";
import Logo from "./Components/Logo.js";
import Articles from "./Components/Articles";
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
        <Navbar />
        <Routes>
          <Route
            path="/articles"
            element={<Articles articles={articles} setArticle={setArticle} />}
          />
          <Route
            path="/topics"
            element={<Topics topics={topics} setTopics={setTopics} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
