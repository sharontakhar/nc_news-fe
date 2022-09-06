import { apiPostComments } from "../Utils/api";
import { useEffect, useState } from "react";
import CommentPage from "./CommentPage";

const PostComment = ({ article }) => {
  const [err, setErr] = useState(true);
  const [viewComment, setViewComment] = useState([]);
  const [comment, setComment] = useState([
    {
      username: "",
      body: "",
    },
  ]);

  useEffect(() => {
    apiPostComments(article).then(({ response }) => {
      console.log(response, "RESPONSE");
      setComment(response);
    });
  }, [article]);

  // const handleSubmit = () => {
  //   setViewComment(!viewComment);
  // };

  return (
    <form>
      <div className="form-group">
        <label for="exampleInputPassword1">Username</label>
        <input
          type="username"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="your username"
          name="username"
          onChange={(e) => {
            const value = e.target.value;
            console.log(value, "value username");
            setComment({ ...comment, [e.target.name]: value });
          }}
        />
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Comment</label>
        <input
          type="body"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="add your comment ..."
          name="body"
          onChange={(e) => {
            const value = e.target.value;
            console.log(value, "value comment");
            setComment({ ...comment, [e.target.name]: value });
          }}
        />
      </div>
      <button
        // onSubmit={handleSubmit}
        className="btn btn-primary"
      >
        Submit
      </button>
    </form>
  );
};

export default PostComment;
