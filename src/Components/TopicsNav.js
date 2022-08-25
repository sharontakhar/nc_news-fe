import { apiGetTopics } from "../Utils/api";
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
              <option key={topic.slug} value="option 1">
                {topic.slug}
              </option>
            );
          })}
        </select>
      </nav>
    </div>
  );
};
export default TopicsNav;
