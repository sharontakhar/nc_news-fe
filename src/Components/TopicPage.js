import { apiGetArticlesByTopic } from "../Utils/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const TopicPage = () => {
  const [topics, setTopics] = useState([]);
  const { topic } = useParams();

  useEffect(() => {
    apiGetArticlesByTopic(topic).then((response) => {
      console.log(response, "response");
      setTopics(response.articles);
    });
  }, []);

  console.log(topics, "topics");
  return (
    <div>
      {topics.map((topic) => {
        console.log(topic, "topic in the loop");
        return (
          <div className="article_div">
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
