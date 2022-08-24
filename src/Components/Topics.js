import { apiGetTopics } from "../Utils/api";
import React from "react";
import { useState, useEffect } from "react";
import TopicCards from "./TopicCards";

const Topics = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    apiGetTopics().then((response) => {
      setTopics(response.topics);
    });
  }, []);

  function handleChangeTopic(e) {
    e.preventDefault();
    //console.log("clicked on nav bar");
  }
  return (
    <div>
      <nav>
        <select className="selectTopic" onClick={handleChangeTopic}>
          {topics.map((topic) => {
            // console.log(topic);
            return (
              <option value="option 1">
                <button>{topic.slug}</button>
              </option>
            );
          })}
        </select>
        <TopicCards />
      </nav>
    </div>
  );
};
export default Topics;
