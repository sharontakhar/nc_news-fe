import { apiGetTopics } from "../Utils/api";
import React from "react";
import { useState, useEffect } from "react";

const TopicCards = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    apiGetTopics().then((response) => {
      setTopics(response.topics);
    });
  }, []);

  return (
    <div>
      {topics.map((topic) => {
        return console.log(topic, "this is inside topic card");
      })}
      {/* <div> */}
      {/* //className="article_div">
        //     <h4>Article ID = {article.article_id}</h4>
        //     <br></br>
        //     <h5>Title: {article.title}</h5>
        //     <br></br>
        //     {article.body} */}
      {/* //</div> */}
    </div>
  );
};

export default TopicCards;
