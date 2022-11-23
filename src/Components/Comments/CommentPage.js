import { apiGetComments } from "../../Utils/api";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import UserContext from "./../User.js";
import CommentForm from "./CommentForm";
import DeleteComment from "./DeleteComment";
import { apiPostComments } from "../../Utils/api";

const CommentPage = () => {
  const [comments, setComments] = useState([]);
  const [newComments, setNewComment] = useState([]);

  const { article, username } = useParams();
  const user = useContext(UserContext);

  useEffect(() => {
    apiGetComments(article).then((response) => {
      console.log(response);
      setComments(response.comments);
    });
  }, [article]);

  const addComment = (newComment) => {
    apiPostComments(article, newComment.body, newComment.username).then(
      (data) => {
        setComments([...comments, ...data.comments]);
      }
    );
  };

  const deleteOnSubmit = (deleteId, comments) => {
    const todelete = comments.filter((comment) => {
      return deleteId !== comment.comment_id;
    });
    setComments(todelete);
  };

  return (
    <div className="Comment_div">
      {comments.map((comment) => {
        return (
          <div className="article_div" key={comment.created_at}>
            <h5>{comment.username || comment.author}</h5>
            <p>{comment.body}</p>
            <p>votes:{comment.votes}</p>
            <DeleteComment
              commentId={comment.comment_id}
              comments={comments}
              deleteOnSubmit={deleteOnSubmit}
            />
          </div>
        );
      })}
      <div className="article_div">
        {" "}
        <h5>Post your comments here:</h5>
        <CommentForm article={article} onSubmitNewComment={addComment} />
      </div>
    </div>
  );
};
export default CommentPage;
