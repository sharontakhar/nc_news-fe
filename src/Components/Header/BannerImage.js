import banner_img from "../../images/banner_img.png";

const BannerImg = () => {
  return (
    <div style={{ height: "100%" }}>
      <img
        src={banner_img}
        className="BannerVerticalImg"
        width="200"
        style={{ display: "block", width: "160px" }}
      />
    </div>
  );
};

export default BannerImg;
