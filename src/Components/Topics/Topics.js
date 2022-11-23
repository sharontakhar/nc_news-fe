import { apiGetTopics } from "../../Utils/api";
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
    <>
      <div className="dd-wrapper">
        <div className="dd-list">
          {topics.map((topic) => {
            return (
              <button className="topic_article_div" key={topic.slug}>
                <Link className="link_to_div" to={`/topics/${topic.slug}`}>
                  {topic.slug}
                </Link>
              </button>
            );
          })}
        </div>
        <TopicPage />
      </div>
    </>
  );
};

export default Topics;
