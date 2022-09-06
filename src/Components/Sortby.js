import sortbystyle from "./SortbyStyling.css";
import { apiGetArticlesSorted } from "../Utils/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Sortby = () => {
  const [seeArticles, setSeeArticles] = useState([]);
  const [sorted, setSorted] = useState("created_at");
  const { created_at } = useParams();

  useEffect(() => {
    apiGetArticlesSorted(sorted).then((response) => {
      setSeeArticles(response);
    });
  }, [sorted]);

  const handleSubmit = (e) => {};
  return (
    <>
      <div class="dropdown">
        <button class="dropbtn">Filter</button>
        <div class="dropdown-content">
          <a href="#">Date</a>
        </div>
      </div>

      {/* <div class="dropdown">
        <button class="dropbtn">Filter by Topic</button>
        <div class="dropdown-content">
          <a href="#">Coding</a>
          <a href="#">Football</a>
          <a href="#">Cooking</a>
        </div>
      </div> */}
    </>
  );
};
export default Sortby;
