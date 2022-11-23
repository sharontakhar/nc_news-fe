import { apiPostComments as postComments } from "../../Utils/api";
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import UserContext from "../User";
import CommentPage from "./CommentPage";

const CommentForm = ({ article, onSubmitNewComment }) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  let user = useContext(UserContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const [username, body] = getValues(["username", "body"]);
    onSubmitNewComment({ username, body });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label for="exampleInputPassword1">Username</label>
          <input
            {...register("username", {
              required: "username is required, please submit",
              minLength: {
                value: 4,
                message: "min length 4 characters",
              },
            })}
            type="username"
            className="form-control"
            placeholder="your username"
          />
          <p>{errors.username?.message}</p>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Comment</label>
          <input
            {...register("body")}
            type="body"
            className="form-control"
            placeholder="Add your comment ..."
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
