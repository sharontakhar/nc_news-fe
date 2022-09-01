import { apiGetTopics } from "../Utils/api";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";

const TopicsNav = () => {
  const [topicsNav, setTopicsNav] = useState([]);

  useEffect(() => {
    apiGetTopics().then((response) => {
      setTopicsNav(response.topics);
    });
  }, []);

  return (
    <div className="TopicOptions">
      <nav>
        <select className="selectTopic">
          {topicsNav.map((topic) => {
            return (
              <div className="topicOps" key={topic.slug} value="option 1">
                {topic.slug}
              </div>
            );
          })}
        </select>
      </nav>
    </div>
  );
};

export default TopicsNav;
