import { apiGetArticles } from "../Utils/api.js";
import React from "react";
import { useState, useEffect } from "react";

const Articles = () => {
  const [articles, setArticle] = useState([]);

  useEffect(() => {
    apiGetArticles().then((response) => {
      setArticle(response.articles);
    });
  }, []);

  return (
    <div>
      {articles.map((article) => {
        return (
          <div className="article_div">
            <h5>Title: {article.title}</h5>
            <br></br>
            {article.body}
          </div>
        );
      })}
    </div>
  );
};

export default Articles;

// {articles.map((singleArticle) => {
//   return <div>{singleArticle}</div>;
// })}
