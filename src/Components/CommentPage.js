import { apiGetComments } from "../Utils/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostComment from "../Components/PostComment";

const CommentPage = () => {
  const [comments, setComments] = useState([]);
  let { article } = useParams();

  useEffect(() => {
    apiGetComments(article).then((response) => {
      setComments(response.comments);
    });
  }, [article]);

  return (
    <div>
      {comments.map((comment) => {
        return (
          <div className="article_div">
            <h5>{comment.author}</h5>
            <p>{comment.body}</p>
            <p>votes:{comment.votes}</p>
          </div>
        );
      })}

      <div className="article_div">
        {" "}
        <h5>Post your comments here:</h5>
        <PostComment />
      </div>
    </div>
  );
};

export default CommentPage;
