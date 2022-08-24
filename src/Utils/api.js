import axios from "axios";

export const apiGetArticles = () => {
  return fetch("https://nc-news-be-app.herokuapp.com/api/articles")
    .then((response) => response.json())
    .then((json) => {
      return json;
    });
};

//all calls in here

export const apiGetTopics = () => {
  return fetch("https://nc-news-be-app.herokuapp.com/api/topics")
    .then((response) => response.json())
    .then((json) => {
      return json;
    });
};

export const apiGetArticlesByTopic = (topic) => {
  return axios
    .get(`https://nc-news-be-app.herokuapp.com/api/articles?topic=${topic}`)
    .then(({ data }) => {
      return data;
    });
};
