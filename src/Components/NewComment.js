const NewComment = (comment) => {
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
    </div>
  );
};

export default NewComment;
