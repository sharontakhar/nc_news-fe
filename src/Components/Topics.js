import { apiGetTopics } from "../Utils/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
          <div key={topic.slug}>
            <Link to={`/topics/${topic.slug}`}>{topic.slug}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Topics;
