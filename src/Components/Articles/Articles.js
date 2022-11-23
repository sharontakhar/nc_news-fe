import Banner from "../Header/BannerImage";
import SortArticles from "./Sortby";

const Articles = () => {
  return (
    <>
      <div className="hero">
        <div className="dominate_article_div">
          <Banner />
        </div>
        <div>
          <SortArticles />
        </div>
        <div>
          <Banner />
        </div>
      </div>
    </>
  );
};

export default Articles;
