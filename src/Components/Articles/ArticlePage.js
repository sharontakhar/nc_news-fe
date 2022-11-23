import { apiGetArticlesByArticleId } from "../../Utils/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VoteIncrement from "../Comments/VoteIncrement";
import { Link } from "react-router-dom";

const ArticlePage = () => {
  const [singleArticle, setSingleArticle] = useState({});
  let { article } = useParams();

  useEffect(() => {
    apiGetArticlesByArticleId(article).then((response) => {
      setSingleArticle(response.articles);
    });
  }, [article]);

  return (
    <div className="article_div">
      <h2>{singleArticle.title}</h2>
      <p>{singleArticle.author}</p>
      <p>{singleArticle.created_at}</p>
      <p>{singleArticle.body}</p>
      <VoteIncrement />
      <button className="btn btn-warning btn-lrg">
        <Link to={`/articles/${singleArticle.article_id}/comments`}>
          Comments
        </Link>
      </button>
    </div>
  );
};

export default ArticlePage;
