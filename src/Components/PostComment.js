import { apiPostComments } from "../Utils/api";
import { useState } from "react";
import { useParams } from "react-router-dom";

const PostComment = () => {
  const [] = useState();
  let { article } = useParams();

  return (
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Username</label>
        <input
          type="username"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter your username here"
        />
        <small id="emailHelp" class="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Comment</label>
        <input
          type="comment"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="add your comment ..."
        />
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default PostComment;
