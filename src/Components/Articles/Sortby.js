import React from "react";
import { useState, useEffect } from "react";
import { apiGetQueryArticles } from "../../Utils/api";

const SortArticles = () => {
  const [sortByParam, setSortbyParam] = useState("votes");
  const [order, setOrder] = useState("DESC");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    apiGetQueryArticles(sortByParam, order).then(({ articles }) => {
      setArticles(articles);
      console.log(articles, "articles here");
    });
  }, [sortByParam, order]);

  const handleSubmit = (event) => {
    setSortbyParam(event.target.value);
  };

  const handleSubmitOrder = (event) => {
    setOrder(event.target.value);
  };

  return (
    <>
      <div className="dropdown">
        <select
          className="dropdown"
          onChange={handleSubmit}
          value={setSortbyParam}
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
        <div>
          {articles.map((article) => {
            return (
              <div className="article_div" key={article.article_id}>
                <h5>Title: {article.title}</h5>
                {article.body}
                <p>date posted: {article.created_at}</p>
                <p>votes: {article.votes}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SortArticles;
