import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Articles from "../src/Components/Articles/Articles";
import ArticlePage from "../src/Components/Articles/ArticlePage";
import Navbar from "../src/Components/Header/Navbar";
import Topics from "../src/Components/Topics/Topics";
import CommentPage from "../src/Components/Comments/CommentPage";
import TopicPage from "../src/Components/Topics/TopicPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/articles" element={<Articles />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/topics/:topic" element={<Topics />} />
          <Route path="/topics/:topic" element={<TopicPage />} />
          <Route path="/articles/:article" element={<ArticlePage />} />
          <Route path="/articles/:article/comments" element={<CommentPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
