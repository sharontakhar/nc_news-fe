import { apiGetArticlesByArticleId } from "../Utils/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ArticlePage = () => {
  const [singleArticle, setSingleArticle] = useState({});
  let { article } = useParams();
  console.log(article);

  useEffect(() => {
    apiGetArticlesByArticleId(article).then((response) => {
      console.log(response.articles);
      setSingleArticle(response.articles);
    });
  }, [article]);

  return (
    <div className="article_div">
      <h2>{singleArticle.title}</h2>
      <p>{singleArticle.author}</p>
      <p>{singleArticle.created_at}</p>
      <p>{singleArticle.body}</p>
      <p>{singleArticle.votes}</p>
    </div>
  );
};

export default ArticlePage;
