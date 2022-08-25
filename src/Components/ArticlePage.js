import { apiGetArticlesByArticleId } from "../Utils/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ArticlePage = () => {
  const [articles, setArticle] = useState([]);
  const { articleId } = useParams();

  useEffect(() => {
    apiGetArticlesByArticleId(articleId).then((response) => {
      console.log(response, "this is the reponse");
      setArticle(response.articles);
    });
  }, []);

  return (
    <div>
      "this is the article page return"
      {articles.map((article) => {
        return console.log(article);
      })}
    </div>
  );
};

export default ArticlePage;
