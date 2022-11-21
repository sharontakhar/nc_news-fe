import { apiGetArticles } from "../Utils/api";
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Banner from "./BannerImage";
import Sortby from "./Sortby";

const Articles = () => {
  const [articles, setArticle] = useState([]);

  useEffect(() => {
    apiGetArticles().then((response) => {
      setArticle(response.articles);
    });
  }, []);

  return (
    <>
      <Banner />

      <div>
        {articles.map((article) => {
          return (
            <div className="article_div" key={article.article_id}>
              <h5>Title: {article.title}</h5>
              <br></br>
              {article.body}
              <br></br>
              <br></br>
              <p>date posted: {article.created_at}</p>
              <p>votes: {article.votes}</p>
              <Link to={`/articles/${article.article_id}`}>
                click here to open on seperate page
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Articles;
