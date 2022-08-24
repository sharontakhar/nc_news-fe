import { apiGetTopics } from "../Utils/api";
import React from "react";
import TopicCards from "./TopicCards";
import { useState, useEffect } from "react";
const TopicsNav = () => {
  const [topicsNav, setTopicsNav] = useState([]);

  useEffect(() => {
    apiGetTopics().then((response) => {
      setTopicsNav(response.topics);
    });
  }, []);

  function handleChangeTopic(e) {
    e.preventDefault();
  }

  return (
    <div className="TopicOptions">
      <nav>
        <select className="selectTopic" onClick={handleChangeTopic}>
          {topicsNav.map((topic) => {
            return (
              <option key={topic.slug} value="option 1">
                {topic.slug}
              </option>
            );
          })}
        </select>
        <TopicCards />
      </nav>
    </div>
  );
};
export default TopicsNav;
