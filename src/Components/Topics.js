import { apiGetTopics } from "../Utils/api";
import React from "react";
import { useState, useEffect } from "react";

const Topics = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    apiGetTopics().then((response) => {
      setTopics(response.topics);
    });
  }, []);

  function handleChangeTopic(e) {
    e.preventDefault();
    console.log(topics);
  }
  return (
    <div>
      <nav>
        <select className="selectTopic" onClick={handleChangeTopic}>
          {topics.map((topic) => {
            console.log(topic);
            return <option value="option 1">{topic.slug}</option>;
          })}
        </select>
      </nav>
    </div>
  );
};
export default Topics;
