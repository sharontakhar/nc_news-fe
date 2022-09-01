import { apiPostComments } from "../Utils/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostComment = () => {
  const [postComment, setPostComments] = useState({
    username: "",
    body: "",
  });

  const [validSubmit, setValidSubmit] = useState(true);
  const [successfulSubmit, setSuccessfulSubmit] = useState(true);

  const handleChange = (e) => {
    const value = e.target.value;
    setPostComments({
      ...postComment,
      [e.target.name]: value,
    });
    console.log(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const commentsData = {
      username: postComment.username,
      body: postComment.body,
    };
    console.log(commentsData, "commsdata");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label for="exampleInputPassword1">Username</label>
        <input
          type="username"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="your username"
          name="username"
          value={postComment.username}
          onChange={handleChange}
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
          value={postComment.body}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default PostComment;
