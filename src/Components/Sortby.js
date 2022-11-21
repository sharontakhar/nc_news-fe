import { useEffect, useState } from "react";
import { apiGetQueryArticles } from "../Utils/api";
import Articles from "./Articles";

const SortArticles = () => {
  const [sortByParam, setSortbyParam] = useState();
  const [order, setOrder] = useState();
  const [articles, setArticles] = useState();

  useEffect(() => {
    apiGetQueryArticles(sortByParam, order).then(({ articles }) => {
      setArticles(articles);
      console.log(articles, "articles here");
    });
  }, [sortByParam, order]);

  const handleSubmit = (event) => {
    // const sortBy = search.get("sortBy") || null;
    setSortbyParam(event.target.value);
  };

  const handleSubmitOrder = (event) => {
    // const order = search.get("order") || null;
    setOrder(event.target.value);
  };

  return (
    <>
      <div className="dropdown">
        <select
          className="dropdown"
          onChange={handleSubmit}
          value={sortByParam}
        >
          <option
            className="dropdown-content"
            id="created_at"
            value="created_at"
          >
            Date
          </option>
          <option className="dropdown-content" id="votes" value="votes">
            Votes
          </option>
        </select>

        <select className="dropdown" onChange={handleSubmitOrder} value={order}>
          <option className="dropdown-content" value="ASC" id="ascending">
            ascending
          </option>
          <option className="dropdown-content" value="DESC" id="descending">
            descending
          </option>
        </select>
      </div>
      {/* <Articles articles={articles} setArticle={setArticles} /> */}
      {articles.map((article) => {
        return (
          <div className="sorted_article_div">
            <h5>Title: {article.title}</h5>
            <br></br>
            {article.body}
            <br></br>
            <br></br>
            <p>date posted: {article.created_at}</p>
            <p>votes: {article.votes}</p>
          </div>
        );
      })}
    </>
  );
};
export default SortArticles;
