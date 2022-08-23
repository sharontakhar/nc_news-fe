exports.apiGetArticles = () => {
  return fetch("https://nc-news-be-app.herokuapp.com/api/articles")
    .then((response) => response.json())
    .then((json) => {
      return json;
    });
};

//all calls in here
