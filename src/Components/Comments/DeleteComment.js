import { apiDeleteComment } from "../../Utils/api";

const DeleteComment = ({ commentId, comments, deleteOnSubmit }) => {
  const handleClickDelete = async () => {
    await apiDeleteComment(commentId);
    deleteOnSubmit(commentId, comments);
  };

  return (
    <>
      <button onClick={handleClickDelete}>Delete Comment</button>
    </>
  );
};
export default DeleteComment;
