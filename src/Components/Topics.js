import { apiGetTopics } from "../Utils/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TopicPage from "./TopicPage";

const Topics = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    apiGetTopics().then((response) => {
      setTopics(response.topics);
    });
  }, []);

  return (
    <div>
      {topics.map((topic) => {
        return (
          <div className="topic_article_div" key={topic.slug}>
            <Link className="id_div" to={`/topics/${topic.slug}`}>
              {topic.slug}
            </Link>
          </div>
        );
      })}

      <div className="article_div">
        <TopicPage />
      </div>
    </div>
  );
};

export default Topics;
