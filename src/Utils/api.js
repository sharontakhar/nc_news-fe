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

export const apiGetArticlesByArticleId = (id) => {
  return axios
    .get(`https://nc-news-be-app.herokuapp.com/api/articles/${id}`)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const apiPatchVotes = (id, singleVote) => {
  return axios
    .patch(`https://nc-news-be-app.herokuapp.com/api/articles/${id}`, {
      inc_votes: singleVote,
    })
    .then(({ data }) => {
      return data;
    });
};

export const apiGetComments = (id) => {
  return axios
    .get(`https://nc-news-be-app.herokuapp.com/api/articles/${id}/comments`)
    .then(({ data }) => {
      return data;
    });
};

export const apiPostComments = (article_id, bodydata) => {
  return axios
    .post(
      `https://nc-news-be-app.herokuapp.com/api/articles/${article_id}/comments`,
      bodydata
    )
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const apiGetArticlesSorted = (created_at) => {
  return axios
    .get(
      `https://nc-news-be-app.herokuapp.com/api/articles?sort_by=${created_at}`
    )
    .then(({ data }) => {
      return data;
    });
};
