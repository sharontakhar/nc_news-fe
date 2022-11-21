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

export const apiPostComments = (article_id, body, username) => {
  console.log(article_id, body, username);
  return axios({
    method: "post",
    url: `https://nc-news-be-app.herokuapp.com/api/articles/${article_id}/comments`,
    data: { body, username },
  })
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

export const apiDeleteComment = (comment_id) => {
  return axios
    .delete(`https://nc-news-be-app.herokuapp.com/api/comments/${comment_id}`)
    .then((data) => {
      console.log(data);
    });
};

export const apiGetQueryArticles = async (sortBy, order) => {
  const queryString = `?sort_by=${sortBy}&order=${order}`;
  const article = await axios.get(
    `https://nc-news-be-app.herokuapp.com/api/articles${queryString}`
  );
  const { data } = article;
  return data;
};
