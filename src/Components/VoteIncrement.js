import { apiGetArticlesByArticleId } from "../Utils/api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const VoteIncrement = () => {
  const [vote, setVotes] = useState(0);
  let { article } = useParams();

  useEffect(() => {
    apiGetArticlesByArticleId(article).then((response) => {
      setVotes(response.articles.votes);
    });
  }, [article]);

  const incrementVote = () => {
    setVotes(vote + 1);
  };

  const decrementVote = () => {
    setVotes(vote - 1);
  };

  return (
    <div>
      <div>
        <h5>{vote}</h5>
        <button
          id="voteButton"
          className="btn btn-warning btn-lrg"
          onClick={incrementVote}
        >
          RATE IT
        </button>

        <button
          id="voteButton"
          className="btn btn-warning btn-lrg"
          onClick={decrementVote}
        >
          UNDO VOTE
        </button>
      </div>
    </div>
  );
};
export default VoteIncrement;
