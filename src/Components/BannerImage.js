import banner_img from "../images/banner_img.png";

const BannerImg = () => {
  return (
    <img
      src={banner_img}
      className="BannerVerticalImg"
      width="200"
      style={{ display: "flex", width: "180px" }}
    />
  );
};

export default BannerImg;
