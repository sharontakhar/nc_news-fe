import news_banner from "../../images/news_banner.webp";

const Header = () => {
  return (
    <div className="Header">
      <img
        src={news_banner}
        className="NewsVerticalImg"
        width="200"
        style={{ display: "block", width: "1000px" }}
      />
    </div>
  );
};

export default Header;
