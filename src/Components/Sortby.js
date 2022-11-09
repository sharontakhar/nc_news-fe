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

  // const handleSubmit = (e) => {};
  return (
    <>
      <div className="dropdown">
        <button className="dropbtn">Filter</button>
        <div className="dropdown-content">{/* <a href="#">Date</a> */}</div>
      </div>
    </>
  );
};
export default Sortby;
