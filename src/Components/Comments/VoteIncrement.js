import { apiPatchVotebyArticleId } from "../../Utils/api";
import { apiPatchVotes } from "../../Utils/api";
import { useParams } from "react-router-dom";
import { useState } from "react";

const VoteIncrement = () => {
  const [vote, setVotes] = useState(0);
  const [newErrs, setNewErrs] = useState();
  let { article } = useParams();

  const handleVote = (singleVote) => {
    setVotes((currentVote) => currentVote + singleVote);
    apiPatchVotes(article, vote)
      .then(() => {
        setNewErrs(null);
        console.log("the vote has been updated");
      })
      .catch(() => {
        console.log(newErrs);
        setVotes((currentVote) => currentVote - singleVote);
        setNewErrs("Something went wrong, please try again.");
      });
  };

  return (
    <div>
      <div>
        <h5>{vote}</h5>
        <button
          id="voteButton"
          className="btn btn-warning btn-lrg"
          onClick={(e) => {
            e.preventDefault();
            handleVote(1);
          }}
        >
          RATE IT
        </button>
        <button
          id="voteButton"
          className="btn btn-warning btn-lrg"
          onClick={(e) => {
            e.preventDefault();
            handleVote(-1);
          }}
        >
          UNDO VOTE
        </button>
      </div>
    </div>
  );
};
export default VoteIncrement;
