import { apiGetComments } from "../Utils/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostComment from "../Components/PostComment";

const CommentPage = () => {
  const [comments, setComments] = useState({});
  let { article } = useParams();

  useEffect(() => {
    apiGetComments(article).then((response) => {
      console.log(response.comments);
      setComments(response.comments);
    });
  }, [article]);
  return (
    <div className="article_div">
      <p>{comments.author}</p>
      <p>{comments.body}</p>
      <p>{comments.votes}</p>

      <div>
        <PostComment />
      </div>
    </div>
  );
};

export default CommentPage;
