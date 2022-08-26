import { apiGetArticlesByTopic } from "../Utils/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const TopicPage = () => {
  const [topics, setTopics] = useState([]);
  const { topic } = useParams();

  useEffect(() => {
    apiGetArticlesByTopic(topic).then((response) => {
      setTopics(response.articles);
    });
  }, [topic]);

  return (
    <div>
      {topics.map((topic) => {
        return (
          <div className="article_div" key={topic.slug}>
            <h5>{topic.title}</h5>
            <p>{topic.body}</p>
          </div>
        );
      })}
    </div>
  );
};
//};
export default TopicPage;
